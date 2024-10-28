import React from 'react';

function Dashboard() {
  return (
    <div style={styles.container}>
      <h2>Bem-vindo ao Reciclo</h2>
      <p>Você está logado!</p>
    </div>
  );
}

const styles = {
  container: {
    width: '300px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
};

export default Dashboard;
