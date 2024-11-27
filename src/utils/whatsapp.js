export const getWhatsAppUrl = (phone, message) => {
  const encodedMessage = encodeURIComponent(message);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  if (isMobile) {
    return `whatsapp://send?phone=${phone}&text=${encodedMessage}`;
  } else {
    return `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
  }
}; 