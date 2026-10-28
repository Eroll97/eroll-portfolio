'use client';

import { useEffect } from 'react';
import { isRestrictedShortcut } from '../lib/contentDeterrents';

export default function ContentDeterrents() {
  useEffect(() => {
    const stopContextMenu = event => {
      event.preventDefault();
      event.stopImmediatePropagation();
    };
    const stopShortcut = event => {
      if (isRestrictedShortcut(event)) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };
    const stopVideoDrag = event => {
      if (event.target instanceof HTMLVideoElement) event.preventDefault();
    };
    window.addEventListener('contextmenu', stopContextMenu, true);
    window.addEventListener('keydown', stopShortcut, true);
    document.addEventListener('dragstart', stopVideoDrag, true);
    return () => {
      window.removeEventListener('contextmenu', stopContextMenu, true);
      window.removeEventListener('keydown', stopShortcut, true);
      document.removeEventListener('dragstart', stopVideoDrag, true);
    };
  }, []);
  return null;
}
