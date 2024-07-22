using AACalendar.Models; 
using AACalendar.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace AACalendar.Controllers
{
    public class HomeController : Controller
    {
        private static List<Employee> employees = new List<Employee>
        {
                new Employee { Id = 1, Firstname = "John", Lastname = "Don", Position = "Developer", Department = "IT", Email = "john.don@example.com" },
                new Employee { Id = 2, Firstname = "Jane", Lastname = "Johnson", Position = "Manager", Department = "HR", Email = "jane.johsnon@example.com" },
                new Employee { Id = 3, Firstname = "Bob", Lastname = "Smith", Position = "Analyst", Department = "Finance", Email = "bob.smith@example.com" }
        };

        public IActionResult Add()
        {
           var e = new Employee(0, "n", "l", "p", "d", "e");
           employees.Add(e);
           return View("Details", employees);
        }

        public IActionResult Index()
        {
            return View("Calendar");
        }
        public IActionResult Calendar()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult Details()
        {
            return View(employees);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
