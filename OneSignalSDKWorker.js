importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');
OneSignal.SERVICE_WORKER_PATH = 'Lista_de_Tarefas/OneSignalSDKWorker.js';
OneSignal.SERVICE_WORKER_UPDATER_PATH = 'Lista_de_Tarefas/oneSignalSDKUpdaterWorker.js'
OneSignal.init();
