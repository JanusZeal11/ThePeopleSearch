using Castle.Core.Internal;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging.Abstractions;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ThePeopleSearch.Controllers;
using ThePeopleSearch.Data;
using ThePeopleSearch.Models;

namespace ThePeopleSearch_Test
{
    [TestFixture]
    public class PeopleController_Get
    {
        [SetUp]
        public void Setup()
        { }

        [Test]
        public void Heartbeat()
        {
            Assert.Pass();
        }

        [Test]
        public async Task GetPersons()
        {
            // Arrange
            var options = new DbContextOptionsBuilder<PersonDbContext>()
                .UseInMemoryDatabase(databaseName: "TPSDatabase")
                .Options;
            using (var context = new PersonDbContext(options, true))
            {
                if (context.Persons.Where(b => b.FirstName == "John" && b.LastName == "Doe").IsNullOrEmpty())
                {
                    context.Persons.Add(new Person
                    {
                        FirstName = "John",
                        LastName = "Doe",
                        Address = "123 Main St",
                        City = "Anytown",
                        State = "AA",
                        PostalCode = "11111",
                        Phone = "555-555-5555",
                        Email = "john.doe@email.com",
                        ImageName = "profile.png",
                        ImageData = null,
                    });
                    context.SaveChanges();
                }
                var peopleController = new PeopleController(new NullLogger<PeopleController>(), context);

                // Act
                var result = await peopleController.GetPersons();

                // Assert
                Assert.AreNotEqual(0, result.Value.Count());
            }

            await Task.CompletedTask;
        }

        [Test]
        public async Task GetPerson()
        {
            // Arrange
            var id = 0;
            var options = new DbContextOptionsBuilder<PersonDbContext>()
                .UseInMemoryDatabase(databaseName: "TPSDatabase")
                .Options;
            using (var context = new PersonDbContext(options, true))
            {
                if (context.Persons.Where(b => b.FirstName == "John" && b.LastName == "Doe").IsNullOrEmpty())
                {
                    context.Persons.Add(new Person
                    {
                        FirstName = "John",
                        LastName = "Doe",
                        Address = "123 Main St",
                        City = "Anytown",
                        State = "AA",
                        PostalCode = "11111",
                        Phone = "555-555-5555",
                        Email = "john.doe@email.com",
                        ImageName = "profile.png",
                        ImageData = null,
                    });
                    context.SaveChanges();
                }
                id = context.Persons.Where(b => b.FirstName == "John" && b.LastName == "Doe").FirstOrDefault().Id;
                var peopleController = new PeopleController(new NullLogger<PeopleController>(), context);

                // Act
                var result = await peopleController.GetPerson(id);

                // Assert
                Assert.AreEqual("John", result.Value.FirstName);
                Assert.AreEqual("Doe", result.Value.LastName);
                Assert.AreEqual("123 Main St", result.Value.Address);
                Assert.AreEqual("Anytown", result.Value.City);
                Assert.AreEqual("AA", result.Value.State);
                Assert.AreEqual("11111", result.Value.PostalCode);
                Assert.AreEqual("555-555-5555", result.Value.Phone);
                Assert.AreEqual("john.doe@email.com", result.Value.Email);
                Assert.AreEqual("profile.png", result.Value.ImageName);
                Assert.AreEqual(null, result.Value.ImageData);
            }

            await Task.CompletedTask;
        }

        [Test]
        public async Task PutPerson()
        {
            // Arrange
            var options = new DbContextOptionsBuilder<PersonDbContext>()
                .UseInMemoryDatabase(databaseName: "TPSDatabase")
                .Options;
            using (var context = new PersonDbContext(options, true))
            {
                if (context.Persons.Where(b => b.FirstName == "John" && b.LastName == "Doe").IsNullOrEmpty())
                {
                    context.Persons.Add(new Person
                    {
                        FirstName = "John",
                        LastName = "Doe",
                        Address = "123 Main St",
                        City = "Anytown",
                        State = "AA",
                        PostalCode = "11111",
                        Phone = "555-555-5555",
                        Email = "john.doe@email.com",
                        ImageName = "profile.png",
                        ImageData = null,
                    });
                    context.SaveChanges();
                }
                var peopleController = new PeopleController(new NullLogger<PeopleController>(), context);

                // Act
                var result = await peopleController.PutPerson(1, new Person
                {
                    Id = 1,
                    FirstName = "Jane",
                    LastName = "Doe",
                    Address = "123 Main St",
                    City = "Anytown",
                    State = "AA",
                    PostalCode = "11111",
                    Phone = "555-555-5555",
                    Email = "john.doe@email.com",
                    ImageName = "profile.png",
                    ImageData = null,
                });

                // Assert
                Assert.IsNotNull(context.Persons.Where(b => b.FirstName == "Jane").FirstOrDefault());
            }

            await Task.CompletedTask;
        }

        [Test]
        public async Task PostPerson()
        {
            // Arrange
            var options = new DbContextOptionsBuilder<PersonDbContext>()
                .UseInMemoryDatabase(databaseName: "TPSDatabase")
                .Options;
            using (var context = new PersonDbContext(options, true))
            {
                var peopleController = new PeopleController(new NullLogger<PeopleController>(), context);

                // Act
                var result = await peopleController.PostPerson(new Person
                {

                    FirstName = "Sam",
                    LastName = "Doe",
                    Address = "123 Main St",
                    City = "Anytown",
                    State = "AA",
                    PostalCode = "11111",
                    Phone = "555-555-5555",
                    Email = "john.doe@email.com",
                    ImageName = "profile.png",
                    ImageData = null,
                });

                // Assert
                Assert.IsNotNull(context.Persons.Where(b => b.FirstName == "Sam").FirstOrDefault());
            }

            await Task.CompletedTask;
        }

        [Test]
        public async Task DeletePerson()
        {
            // Arrange
            var id = 0;
            var options = new DbContextOptionsBuilder<PersonDbContext>()
                .UseInMemoryDatabase(databaseName: "TPSDatabase")
                .Options;
            using (var context = new PersonDbContext(options, true))
            {
                if (context.Persons.Where(b => b.FirstName == "Sally" && b.LastName == "Doe").IsNullOrEmpty())
                {
                    context.Persons.Add(new Person
                    {
                        FirstName = "Sally",
                        LastName = "Doe",
                        Address = "123 Main St",
                        City = "Anytown",
                        State = "AA",
                        PostalCode = "11111",
                        Phone = "555-555-5555",
                        Email = "john.doe@email.com",
                        ImageName = "profile.png",
                        ImageData = null,
                    });
                    context.SaveChanges();
                }
                id = context.Persons.Where(b => b.FirstName == "Sally" && b.LastName == "Doe")
                    .FirstOrDefault().Id;
                var peopleController = new PeopleController(new NullLogger<PeopleController>(), context);

                // Act
                var result = await peopleController.DeletePerson(id);

                // Assert
                var testPerson = context.Persons.Where(b => b.FirstName == "Sally").FirstOrDefault();
                Assert.AreEqual("Sally", testPerson.FirstName);
                Assert.IsFalse(testPerson.IsActive);
            }

            await Task.CompletedTask;
        }
    }
}