using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplicationPlateforme.Data;
using WebApplicationPlateforme.Model;

namespace WebApplicationPlateforme.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChatModelsController : ControllerBase
    {
        private readonly FinanceContext _context;

        public ChatModelsController(FinanceContext context)
        {
            _context = context;
        }

        // GET: api/ChatModels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ChatModel>>> GetchatModels()
        {
            return await _context.chatModels.ToListAsync();
        }

        // GET: api/ChatModels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ChatModel>> GetChatModel(int id)
        {
            var chatModel = await _context.chatModels.FindAsync(id);

            if (chatModel == null)
            {
                return NotFound();
            }

            return chatModel;
        }

        // PUT: api/ChatModels/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutChatModel(int id, ChatModel chatModel)
        {
            if (id != chatModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(chatModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ChatModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ChatModels
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ChatModel>> PostChatModel(ChatModel chatModel)
        {
            _context.chatModels.Add(chatModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetChatModel", new { id = chatModel.Id }, chatModel);
        }

        // DELETE: api/ChatModels/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ChatModel>> DeleteChatModel(int id)
        {
            var chatModel = await _context.chatModels.FindAsync(id);
            if (chatModel == null)
            {
                return NotFound();
            }

            _context.chatModels.Remove(chatModel);
            await _context.SaveChangesAsync();

            return chatModel;
        }

        private bool ChatModelExists(int id)
        {
            return _context.chatModels.Any(e => e.Id == id);
        }
    }
}
