using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ThePeopleSearch.Models
{
    public class Person
    {
        public int Id { get; set; }
        public bool IsActive { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string PostalCode { get; set; }
        public string Interests { get; set; }
        public int Age { get; set; }
        public string ImageName { get; set; }
        public byte[] ImageData { get; set; }
    }
}
