// ============================================================
//  Supabase 연결 설정
//  ⚠️ 여기 있는 키는 '공개(anon)' 키라서 외부에 노출돼도 안전합니다.
//     절대 service_role(비밀) 키는 여기에 넣지 마세요.
//     글 등록/수정/삭제는 로그인한 관리자만 가능하도록 DB에 잠금이 걸려 있습니다.
// ============================================================
const SUPABASE_URL = "https://bcranyfdqmfwzmgzhesq.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjcmFueWZkcW1md3ptZ3poZXNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5ODgxMDcsImV4cCI6MjA5NjU2NDEwN30.2EO2Oqicay0jk1GWtsUSp3wcdvqnCKGNf7cehE1ZXyg";

const supa = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 여러 페이지에서 함께 쓰는 도우미 함수
function escapeHtml(s) {
  return (s || "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}
function fmtDate(d) {
  return (d || "").slice(0, 10);
}
