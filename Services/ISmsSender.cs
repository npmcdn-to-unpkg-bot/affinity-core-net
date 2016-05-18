using System.Threading.Tasks;

namespace Affinity.Services
{
 public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
}
