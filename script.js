
// Verifica se o navegador suporta Push Notifications
if ('Notification' in window && 'serviceWorker' in navigator) {
    // Registra o Service Worker
    navigator.serviceWorker.register('service-worker.js')
      .then(function(registration) {
        console.log('Service Worker registrado com sucesso!', registration);
  
        // Solicita permissão para enviar Push Notifications
        return Notification.requestPermission();
      })
      .then(function(permission) {
        if (permission === 'granted') {
          console.log('Permissão para Push Notifications concedida!');
          
          // Realiza a inscrição para receber Push Notifications
          return registration.pushManager.subscribe({ userVisibleOnly: true });
        }
      })
      .then(function(subscription) {
        // Obtem o endpoint para envio das notificações
        const endpoint = subscription.endpoint;
  
        // Envia o endpoint para o servidor para armazenamento e uso posterior
  
        // Exemplo de envio de uma Push Notification
        fetch('https://onesignal.com/api/v1/notifications', {
          method: 'POST',
          headers: {
            'Authorization': 'Basic N2VhYTBmMTMtMzliNi00YTBmLTgwNmItMTU1MjBlNzkyNGJl',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            app_id: '7eaa0f13-39b6-4a0f-806b-15520e7924be',
            contents: { en: 'Esta é uma mensagem de exemplo.' },
            headings: { en: 'Exemplo de Push Notification' },
            endpoint: endpoint,
            title: 'Exemplo de Push Notification',
            body: 'Esta é uma mensagem de exemplo.'
          })
        });
      })
      .catch(function(error) {
        console.error('Erro na configuração das Push Notifications:', error);
      });
  }