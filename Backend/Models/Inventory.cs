using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Inventory :  DbEntity
    {
        public decimal Gold { get; set; }
        [NotMapped]
        public List<Resource> Resources { get; set; }
        
        
    }
}