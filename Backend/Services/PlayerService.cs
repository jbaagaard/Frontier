using System.Collections.Generic;
using System.Threading.Tasks;
using Backend.Models;

namespace Backend.Services
{
    public class PlayerService
    {
        //database 
        //data mapper


        public async Task<Player> getPlayer(long playerId)
        {
            return new Player()
            {
                Id = playerId,
                Inventory = new Inventory()
                {
                    Gold = 10m,
                    Resources = new List<Resource>(){new Resource(){Amount = 2, AveragePrice = 2, Type = ResourceType.Iron}}
                },
                Name = "Lille per",
                Pos = "123"
            };
        }
        
    }
}