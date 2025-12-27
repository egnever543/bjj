export default {
  async fazerLogin() {
    const role = fazerLogin.data[0]?.role;
    
    if (role === 'admin') {
      navigateTo('DashboardAdmin');
    } else if (role === 'professor') {
      navigateTo('DashboardProfessor');
    } else if (role === 'aluno') {
      navigateTo('DashboardAluno');
    }
  }
}