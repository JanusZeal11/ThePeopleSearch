using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging.Abstractions;
using Moq;
using NUnit.Framework;
using System.Runtime.InteropServices.ComTypes;
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
        {
        }

        [Test]
        public void Get_All()
        {
            // Arrange
            var options = new DbContextOptionsBuilder<PersonDbContext>()
                .UseInMemoryDatabase(databaseName: "TPSDatabase")
                .Options;
            using (var context = new PersonDbContext(options))
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
            var peopleController = new PeopleController(new NullLogger<PeopleController>(), new PersonDbContext(options));

            Assert.Pass();
        }
    }
}