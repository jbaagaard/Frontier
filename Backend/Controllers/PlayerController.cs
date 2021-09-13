using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/player")]
    public class PlayerController
    {
        private PlayerService _playerService;

        public PlayerController(PlayerService playerService)
        {
            _playerService = playerService;
        }

        [HttpGet("{playerId}")]
        public async Task<ActionResult<Player>> FetchPlayer([Required, FromRoute] long playerId)
        {
            var player = await _playerService.getPlayer(playerId);

            return player;
        }
        
    }
}