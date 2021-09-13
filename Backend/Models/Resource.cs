using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    [NotMapped]
    public class Resource
    {
        public ResourceType Type { get; set; }
        public int Amount { get; set; }
        public decimal AveragePrice { get; set; }
        
    }
}