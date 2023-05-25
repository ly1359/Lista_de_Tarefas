importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');
OneSignal.init();
OneSignal.SERVICE_WORKER_PATH = 'Lista_de_Tarefas/OneSignalSDKWorker.js';
OneSignal.SERVICE_WORKER_UPDATE_PATH = 'Lista_de_Tarefas/oneSignalSDKUpdaterWorker.js'
