using Microsoft.AspNetCore.Mvc;

namespace Affinity{
    public class HomeController:Controller{        
        public ActionResult Index(){
            
            return View();
        }
               
    }
    
}