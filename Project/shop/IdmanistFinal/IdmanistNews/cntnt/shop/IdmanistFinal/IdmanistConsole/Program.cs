//using IdmanistData.DataContext;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace IdmanistConsole
//{
//    class Program
//    {
//        static void Main(string[] args)
//        {

//        }
//    }
//    public class Taxi
//    {
//        public int taxiNum;
//        public double pointX;
//        public double pointY;
//        public double taxi2customer;
//        public double time2customer;
//        public double time4customer;
//        public double velocity = 3;
//        public Taxi(int taxiNum, double pointX, double pointY)
//        {
//            this.taxiNum = taxiNum;
//            this.pointX = pointX;
//            this.pointY = pointY;

//        }
//    }

//    public class Customer
//    {
//        public string name;
//        public double startX;
//        public double startY;
//        public double finishX;
//        public double finishY;
//        public double distance;
//        public Customer(string name, double startX, double startY, double finishX, double finishY, double distance)
//        {
//            this.name = name;
//            this.startX = startX;
//            this.startY = startY;
//            this.finishX = finishX;
//            this.finishY = finishY;
//            this.distance = distance;
//        }
//    }

//    public class Operator
//    {
//        public Taxi[] taxiArray;
//        public Customer[] customerArray;

//        public void CustomerInfo()
//        {
//            Console.WriteLine("Adinizi daxil edin");
//            string name = Console.ReadLine();
//            Console.WriteLine("Oluqunuz mekanin X koordinatini daxil edin: ");
//            double stX = Convert.ToDouble(Console.ReadLine());
//            Console.WriteLine("Oluqunuz mekanin Y koordinatini daxil edin: ");
//            double stY = Convert.ToDouble(Console.ReadLine());
//            Console.WriteLine("Gedilecek mekanin X koordinatini daxil edin: ");
//            double finX = Convert.ToDouble(Console.ReadLine());
//            Console.WriteLine("Gedilecek mekanin Y koordinatini daxil edin: ");
//            double finY = Convert.ToDouble(Console.ReadLine());
//            double distance = Math.Round(Math.Sqrt((Math.Pow((finX - stX), 2) + Math.Pow((finY - stY), 2))));
//            Console.WriteLine("Gedeceyiniz mesafe {0}km", distance);
//            customerArray[](new Customer(name, stX, stY, finX, finY, distance));

//        }

//    }


//}
