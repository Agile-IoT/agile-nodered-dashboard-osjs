/*******************************************************************************
 *Copyright (C) 2017 FBK.
 *All rights reserved. This program and the accompanying materials
 *are made available under the terms of the Eclipse Public License v1.0
 *which accompanies this distribution, and is available at
 *http://www.eclipse.org/legal/epl-v10.html
 *
 *Contributors:
 *    FBK - initial API and implementation
 ******************************************************************************/
(function(Application, GUI, Dialogs, Utils, API, VFS) {
  'use strict';

  /////////////////////////////////////////////////////////////////////////////
  // APPLICATION
  /////////////////////////////////////////////////////////////////////////////

  function AppAgileNodeRedDashBoard(args, metadata) {
    Application.apply(this, ['AppAgileNodeRedDashBoard', args, metadata, {
      src: '',
      title: metadata.name,
      icon: metadata.icon,
      width: 960,
      height: 640,
      allow_resize: true,
      allow_restore: true,
      allow_maximize: true
    }]);

     var src = document.location.protocol + "//" + document.location.hostname + ":1880/api/dash/";

    this.options.src = src;
  }

  AppAgileNodeRedDashBoard.prototype = Object.create(Application.prototype);

  /////////////////////////////////////////////////////////////////////////////
  // EXPORTS
  /////////////////////////////////////////////////////////////////////////////

  OSjs.Applications = OSjs.Applications || {};
  OSjs.Applications.AppAgileNodeRedDashBoard = OSjs.Applications.AppAgileNodeRedDashBoard || {};
  OSjs.Applications.AppAgileNodeRedDashBoard.Class = AppAgileNodeRedDashBoard;

})(OSjs.Helpers.IFrameApplication, OSjs.GUI, OSjs.Dialogs, OSjs.Utils, OSjs.API, OSjs.VFS);
