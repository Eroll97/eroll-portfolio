'use client';

import { useEffect } from 'react';
import { isRestrictedShortcut } from '../lib/contentDeterrents';

export default function ContentDeterrents() {
  useEffect(() => {
    const stopContextMenu = event => event.preventDefault();
    const stopShortcut = event => {
      if (isRestrictedShortcut(event)) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
    const stopVideoDrag = event => {
      if (event.target instanceof HTMLVideoElement) event.preventDefault();
    };
    document.addEventListener('contextmenu', stopContextMenu, true);
    document.addEventListener('keydown', stopShortcut, true);
    document.addEventListener('dragstart', stopVideoDrag, true);
    return () => {
      document.removeEventListener('contextmenu', stopContextMenu, true);
      document.removeEventListener('keydown', stopShortcut, true);
      document.removeEventListener('dragstart', stopVideoDrag, true);
    };
  }, []);
  return null;
}
