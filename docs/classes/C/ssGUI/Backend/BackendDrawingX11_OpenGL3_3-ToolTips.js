﻿NDContentPage.OnToolTipsLoaded({590:"<div class=\"NDToolTip TStruct LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype590\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">struct</span></div><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;DrawingEntity</div></div></div><div class=\"TTSummary\">Structure used to pass to BackendDrawing to draw entities</div></div>",802:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype802\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> DrawEntities(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;ssGUI::DrawingEntity&gt;&amp;&nbsp;</td><td class=\"PName last\">entities</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Draws the entity based on what is set in the <u>properties</u>. Returns true if drawn successfully.&nbsp; Depending on the backend this, the entities might be drawn to internal buffer or drawn to back buffer directly. For OpenGL backends, it will be drawn to internal buffers.&nbsp; DrawToBackBuffer can be called to flush the internal buffer to be drawn on the back buffer.&nbsp; <b>Note that if you are not using ssGUIManager, you need to call Render at the end in order to render it</b>.</div></div>",803:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype803\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> DrawToBackBuffer() = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">This flushes the internal buffer to the back buffer.&nbsp; Depending on the backend, this might have no effect as DrawEntities can draw to back buffer directly.&nbsp; This is also automatically called by Render.</div></div>",1218:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1218\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::&#8203;Backend::</span>&#8203;BackendDrawingInterface</div></div></div></div>",1220:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1220\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> SaveState() = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Saves the OpenGL state</div></div>",1221:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1221\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> RestoreState() = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Restores the OpenGL state</div></div>",1223:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1223\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Render(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec3&nbsp;</td><td class=\"PName last\">clearColor</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Renders every entity that are drawn to the MainWindow. This will automatically clear the back buffer.&nbsp; If you are using ssGUIManager, this will be automatically called.</div></div>",1224:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1224\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> ClearBackBuffer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec3&nbsp;</td><td class=\"PName last\">clearColor</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Clears the back buffer manually. If you are using ssGUIManager, this will be automatically called for caching.</div></div>",1225:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1225\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> AddImageCache(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface*&nbsp;</td><td class=\"PName last\">backendImage</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Add the backend image to cache (this can be uploading the image to GPU memory) or system memory for drawing To update the cache, call BackendImageInterface::UpdateCache.&nbsp; Calling this fuction multiple times will not update the cache.</div></div>",1226:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1226\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> RemoveImageCache(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface*&nbsp;</td><td class=\"PName last\">backendImage</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">This removes the backend image from the cache.</div></div>",1227:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1227\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span>* GetRawImageCacheHandle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface*&nbsp;</td><td class=\"PName last\">backendImage</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">This returns the handle of the image cache. What is returned is backend independent.&nbsp; You can use the returned handle to modify the cached image.&nbsp; If no cache is found, it will return nullptr.</div></div>",1367:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1367\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::&#8203;Backend::</span>&#8203;BackendImageInterface</div></div></div><div class=\"TTSummary\">This allows transferring the image data from the host memory to the gpu memory</div></div>"});