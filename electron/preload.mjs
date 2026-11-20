import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('linuxSystemDetector', {
    version: '0.1.0'
});