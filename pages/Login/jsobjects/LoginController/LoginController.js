export default {
  async fazerLogin() {
    try {
      // Executa a query de login
      await fazerLogin.run();
      
      if (fazerLogin.data && fazerLogin.data.length > 0) {
        // Login com sucesso
        const usuario = fazerLogin.data[0];
        
        // Salva dados do usuário
        await storeValue('usuarioLogado', usuario);
        
        // Mostra mensagem de sucesso
        showAlert('Login realizado com sucesso!', 'success');
        
        // Redireciona baseado no role
        const role = usuario.role;
        
        if (role === 'admin') {
          navigateTo('DashboardAdmin');
        } else if (role === 'professor') {
          navigateTo('DashboardProfessor');
        } else if (role === 'aluno') {
          navigateTo('DashboardAluno');
        }
        
      } else {
        // Login falhou
        showAlert('Email ou senha incorretos', 'error');
      }
      
    } catch (error) {
      showAlert('Erro ao fazer login. Tente novamente.', 'error');
    }
  }
}