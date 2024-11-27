export const getWhatsAppUrl = (phone, message) => {
  const encodedMessage = encodeURIComponent(message);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  if (isMobile) {
    // Gunakan whatsapp:// protocol untuk mobile
    return `whatsapp://send?phone=${phone}&text=${encodedMessage}`;
  } else {
    // Gunakan web.whatsapp.com untuk desktop
    return `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
  }
}; 