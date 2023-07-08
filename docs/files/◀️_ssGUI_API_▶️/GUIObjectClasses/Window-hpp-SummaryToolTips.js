﻿NDSummary.OnToolTipsLoaded("File:◀️_ssGUI_API_▶️/GUIObjectClasses/Window.hpp",{1775:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1775\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">namespace</span> </div><div class=\"CPName\">ssGUI</div></div></div></div>",1776:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1776\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;Window</div></div></div><div class=\"TTSummary\">A base classes for any window GUI Object (including MainWindow). By itself, it can be used as a window that\'s inside MainWindow.&nbsp; By default, it can be resized or move by a cursor.</div></div>",1778:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1778\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> Close()</div></div><div class=\"TTSummary\">Calling this function will triggers the &lt;ssGUI::EventCallbacks::OnWindowCloseEventCallback&gt; and sets this window\'s parent to nullptr.&nbsp; By default, the window will be deleted automatically after closing. You can change this behaviour by calling SetDeleteAfterClosed.</div></div>",1779:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1779\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsClosed() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns if this window is closed or not</div></div>",1780:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1780\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> AbortClosing()</div></div><div class=\"TTSummary\">Calling this function will abort the closing operation. Meaning calling IsClosed will return false.&nbsp; Note that you <b>have to</b> call this in the &lt;ssGUI::EventCallbacks::OnWindowCloseEventCallback&gt; in order for this to work.</div></div>",1781:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1781\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> Internal_OnClose()</div></div><div class=\"TTSummary\">(Internal ssGUI function) You should not be calling this function normally.</div></div>",1782:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1782\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetClosable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">closable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets if there\'s a close button for this window object. This <b>does not</b> affect Close function.&nbsp; This has no affect on the Window class. Classes that derives this class (such as StandardWindow) may use this.</div></div>",1783:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1783\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsClosable() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets if there\'s a close button for this window object. This <b>does not</b> affect Close function.&nbsp; This has no affect on the Window class. Classes that derives this class (such as StandardWindow) may use this.</div></div>",1784:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1784\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetDeleteAfterClosed(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">deleteAfterClosed</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">If sets to true, the window will be deleted automatically after being closed</div></div>",1785:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1785\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsDeleteAfterClosed() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">If returns true, the window will be deleted automatically after being closed</div></div>",1786:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1786\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetTitlebar(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">set</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets if the titlebar exists or not</div></div>",1787:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1787\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> HasTitlebar() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets if the titlebar exists or not</div></div>",1788:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1788\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetTitlebarHeight(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">height</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1789:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1789\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual int</span> GetTitlebarHeight() <span class=\"SHKeyword\">const</span></div></div></div>",1790:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1790\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetTitlebarColor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">color</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1791:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1791\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::u8vec4 GetTitlebarColor() <span class=\"SHKeyword\">const</span></div></div></div>",1792:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1792\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetAdaptiveTitlebarColor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">adaptive</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets if the titlebar color &quot;adapts&quot; to the background color dynamically</div></div>",1793:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1793\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsAdaptiveTitlebarColor() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns if the titlebar &quot;adapts&quot; to the background color dynamically</div></div>",1794:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1794\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetResizeType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">ResizeType&nbsp;</td><td class=\"PName last\">resizeType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the resize type of the window. For MainWindow, only &lt;Enums::ResizeType::ALL&gt; or &lt;Enums::ResizeType::NONE&gt; will work.</div></div>",1795:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1795\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::Enums::ResizeType GetResizeType() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns the resize type of the window</div></div>",1796:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1796\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual int</span> GetResizeHitbox() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the resize hitbox. This is the range from the edge of the window for both direction.</div></div>",1797:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1797\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetResizeHitbox(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">hitbox</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the resize hitbox. This is the range from the edge of the window for both direction.</div></div>",1798:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1798\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsResizing() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns true if the user is currently resizing the window. Not supporting MainWindow for now.</div></div>",1799:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1799\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetDraggable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">draggable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets if the window can be dragged to move around</div></div>",1800:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1800\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsDraggable() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets if the window can be dragged to move around</div></div>",1801:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1801\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::Enums::WindowDragState GetWindowDragState() <span class=\"SHKeyword\">const</span></div></div></div>",1802:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1802\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::WindowResizeDragData GetResizeDragData() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns the current resize and drag status of the window</div></div>",1803:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1803\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetResizeDragData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">WindowResizeDragData&nbsp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the current resize and drag status of the window.&nbsp; Only use it if you know what you are doing</div></div>",1804:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1804\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetOnTopWhenFocused(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">top</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set if the window will be on top when focused, meaning it will be the last child if true</div></div>",1805:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1805\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsOnTopWhenFocused() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns if the window will be on top when focused, meaning it will be the last child if true</div></div>",1806:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1806\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetRenderSize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the render size (area under the titlebar)</div></div>",1807:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1807\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::ivec2 GetRenderSize() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the render size (area under the titlebar)</div></div>",1808:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1808\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetFocus(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">focus</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See ssGUI::Hierarchy::SetFocus</div></div>",1809:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1809\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_SetSelfFocus(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">focus</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See ssGUI::Hierarchy::Internal_SetSelfFocus</div></div>",1810:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1810\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetBackgroundColor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">color</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See ssGUI::Renderer::SetBackgroundColor</div></div>",1811:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1811\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::Enums::GUIObjectType GetType() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See GUIObject::GetType</div></div>",1812:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1812\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> Window* Clone(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">cloneChildren</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See GUIObject::Clone</div></div>"});