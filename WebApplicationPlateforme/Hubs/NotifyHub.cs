using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Concurrent;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;

namespace WebApplicationPlateforme.Hubs
{
    [Authorize]
    public class NotifyHub : Hub
    {
        public static ConcurrentDictionary<string, string> MyUsers = new ConcurrentDictionary<string, string>();



        //public string GetConnectionId() => Context.ConnectionId;
        [Authorize]
        public override async Task OnConnectedAsync()
        {
            
            await Clients.All.SendAsync("UserConnected", Context.ConnectionId, Context.User.Identity.Name);
            await base.OnConnectedAsync();
            /*string name = Context.User.Identity.Name;
            MyUsers.TryAdd(Context.ConnectionId, name);
            return base.OnConnectedAsync();*/
        }

        public override async Task OnDisconnectedAsync(Exception ex)
        {
           /* string garbage;
            MyUsers.TryRemove(Context.ConnectionId, out garbage);
            return base.OnDisconnectedAsync(ex);*/
            await Clients.All.SendAsync("UserDisconnected", Context.ConnectionId);
            await base.OnDisconnectedAsync(ex);
        }

        public string GetConnectionID()
        {
            return Context.ConnectionId;
        }

        public string GetUserIdentifier()
        {
            return Context.UserIdentifier;
        }

        public string GetUserName()
        {
            return Context.User.Identity.Name;
        }

        public Task SendMessageToUser(string sender, string message)
        {
            return Clients.User(sender).SendAsync("ReceiveMessage", message);
        }

    }
}



/* 
 * 
 * *
 * 
 *         public Task SendPrivateMessage(string user, string message)
        {
            return Clients.User(user).SendAsync("ReceiveMessage", message);
        }
 * 
 * public Task SendMessageToUser(string connectionId, string message)
 {
       return Clients.Client(connectionId).SendAsync("ReceiveMessage", message);
     //return Clients.User(user).SendAsync("ReceiveMessage", message);
 }

 //Context.User.Identity.Name??
 public  Task SendMessage(string user, string message)
 {
     return Clients.User(user).SendAsync("UserReceiveMessage", message);
 }


 public Task SendPrivateMessage(string user, string message)
    {
        return Clients.User(user).SendAsync("UserReceiveMessage", message);
    }

 public override async Task OnConnectedAsync()
 {
     // await Clients.All.SendAsync("UserConnected",Context.ConnectionId);
     await Clients.All.SendAsync("UserConnected", Context.ConnectionId);
     await  base.OnConnectedAsync();
 }

 public override async Task OnDisconnectedAsync(Exception exception)
 {
     await Clients.All.SendAsync("UserDisconnected", Context.ConnectionId);
     await base.OnDisconnectedAsync(exception);
 }*/
