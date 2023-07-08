﻿NDSummary.OnToolTipsLoaded("File:◀️_ssGUI_API_▶️/Backend/Interfaces/BackendMainWindowInterface.hpp",{1143:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1143\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">namespace</span> </div><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;Backend</div></div></div></div>",1144:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1144\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::&#8203;Backend::</span>&#8203;BackendMainWindowInterface</div></div></div></div>",1146:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1146\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetWindowPosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">pos</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Sets the MainWindow position (distance from top-left) on the screen</div></div>",1147:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1147\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::ivec2 GetWindowPosition() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Gets the MainWindow position (distance from top-left) on the screen</div></div>",1148:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1148\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::ivec2 GetPositionOffset() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Gets the offset from top-left corner of the rendering area and the top-left corner of the titlebar.&nbsp; The offset should always be positive, meaning adding the offset to GetWindowPosition will get the position of the rendering area.</div></div>",1149:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1149\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetWindowSize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Sets the size of the main window</div></div>",1150:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1150\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::ivec2 GetWindowSize() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Gets the size of the window</div></div>",1151:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1151\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetRenderSize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Sets the rendering (client) size of the window</div></div>",1152:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1152\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::ivec2 GetRenderSize() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Gets the rendering (client) size of the window</div></div>",1153:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1153\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsClosed() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Returns if the main window is closed or not</div></div>",1154:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1154\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> Close() = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Closes the main window</div></div>",1155:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1155\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> AbortClosing() = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Stops the main window from closing. Needs to be called when it is being closed in order for it to work.</div></div>",1156:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1156\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual int</span> AddOnCloseEvent(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">void</span>()&gt;&nbsp;</td><td class=\"PName last\">func</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Adds the function to be called when the main window closes. Returns an index that can be used to remove the function for being called.</div></div>",1157:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1157\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> RemoveOnCloseEvent(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Removes the function to be called when the main window closes.</div></div>",1158:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1158\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetTitle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">wstring&nbsp;</td><td class=\"PName last\">title</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Sets the title of the main window</div></div>",1159:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1159\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> std::wstring GetTitle() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Gets the title of the main window</div></div>",1160:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1160\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetIcon(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface&amp;&nbsp;</td><td class=\"PName last\">iconImage</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Sets the icon of the main window</div></div>",1161:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1161\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetVisible(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">visible</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Sets if the main window is visible or not</div></div>",1162:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1162\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsVisible() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Returns if the main window is visible or not</div></div>",1163:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1163\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetVSync(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">vSync</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Sets if vSync is on or not</div></div>",1164:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1164\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsVSync() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Returns if vSync is on or not</div></div>",1165:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1165\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetFocus(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">focus,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">externalByUser</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Sets if the main window to be focused.&nbsp; If true, it essentially bring it to the front If false, it will deselect the main window if supported (SFML not supported)</div></div>",1166:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1166\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsFocused() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Returns if the main window is focused. If not focused, some inputs will not be captured.</div></div>",1167:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1167\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual int</span> AddFocusChangedByUserEvent(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">void</span>(<span class=\"SHKeyword\">bool</span> focused)&gt;&nbsp;</td><td class=\"PName last\">func</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Adds the function to be called when the main window gained or lost focus. Returns an index that can be used to remove the function for being called.</div></div>",1168:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1168\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> RemoveFocusChangedByUserEvent(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Removes the function to be called when the main window gained or lost focus</div></div>",1169:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1169\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetMSAA(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">level</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Sets the main window\'s anti aliasing level</div></div>",1170:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1170\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual int</span> GetMSAA() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Gets the main window\'s anti aliasing level</div></div>",1171:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1171\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetTitlebar(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">titlebar</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Sets if the main window has titlebar (and border) or not</div></div>",1172:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1172\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> HasTitlebar() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Returns if the main window has titlebar (and border) or not. Note that if the main window is not in normal mode, this will return false.</div></div>",1173:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1173\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetResizable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">resizable</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Sets if the main window is resizable or not</div></div>",1174:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1174\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsResizable() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Returns if the main window is resizable or not. Note that if the main window is not in normal mode, this will return false.</div></div>",1175:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1175\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetCloseButton(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">closeButton</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Sets if the main window has close button or not</div></div>",1176:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1176\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> HasCloseButton() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Returns if the main window has close button or not. Note that if the main window is not in normal mode, this will return false.</div></div>",1177:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1177\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetWindowMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">WindowMode&nbsp;</td><td class=\"PName last\">WindowMode</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Sets the main window mode</div></div>",1178:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1178\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::Enums::WindowMode GetWindowMode() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Gets the main window mode</div></div>",1179:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1179\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> SetGLContext() = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Sets this window as the current MainWindow context</div></div>",1180:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1180\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> BackendMainWindowInterface* Clone() = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Clones the current main window with the same settings, dispose it with ssGUI::Factory::Dispose when not needed.&nbsp; Events such as AddOnCloseEvent and AddFocusChangedByUserEvent are not copied.&nbsp; Cloning a closed window is an <b>undefined</b> behaviour, same goes to window that is in &quot;invisible&quot; state.&nbsp; This function is tested limitedly, creating a new MainWindow is advised.</div></div>",1181:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1181\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span>* GetRawHandle() = <span class=\"SHNumber\">0</span></div></div></div>"});