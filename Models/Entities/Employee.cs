namespace AACalendar.Models.Entities
{
    public class Employee
    {
        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Position { get; set; }
        public string Department { get; set; }
        public string Email { get; set; }

        public Employee() {
            Id = 0;
            Firstname = "Name";
            Lastname = "Last";
            Position = "Position";
            Department = "Department";
            Email = "email";
        }

        public Employee(int id, string first, string last, string position, string department, string email)
        {
            Id = id;
            Firstname = first;
            Lastname = last;
            Position = position;
            Department = department;
            Email = email;
        }
    }
}
