namespace Backend.Models
{
    public class Player : DbEntity
    {
        public string Name { get; set; }
        public string Pos { get; set; }
        public Inventory Inventory { get; set; }
        
        

    }
    
    
}