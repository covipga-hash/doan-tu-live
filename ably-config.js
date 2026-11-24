// Cấu hình Ably cho trang game tĩnh (GitHub Pages / Netlify Drop).
//
// CHỈ điền key SUBSCRIBE-ONLY ở đây (capability: subscribe trên channel
// "doan-tu-live"). Key này ai xem source trang cũng thấy được, nên TUYỆT ĐỐI
// KHÔNG dùng key publish/full ở đây — kẻ khác sẽ publish bình luận giả.
// Key publish chỉ nằm trong .env trên VM (server-ably.js).
//
// Cách điền: copy file này thành ably-config.js và thay chuỗi bên dưới,
// hoặc truyền qua URL: ?ablyKey=<key>&ablyChannel=doan-tu-live
window.ABLY_CONFIG = {
  key: 'GVuKBw._lKGEg:-6cQvSr2rHy_B2Mwr19z7Fhk41b5Xqms_x2jTEt7YFE', // vd: 'xxxxx.yyyyy:zzzzzzzzzzzzzzzzzzzzzz' (subscribe-only)
  channel: 'doan-tu-live'
};
