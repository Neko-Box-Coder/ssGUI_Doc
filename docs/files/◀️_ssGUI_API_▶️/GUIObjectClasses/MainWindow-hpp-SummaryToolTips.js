﻿NDSummary.OnToolTipsLoaded("File:◀️_ssGUI_API_▶️/GUIObjectClasses/MainWindow.hpp",{1622:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1622\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">namespace</span> </div><div class=\"CPName\">ssGUI</div></div></div></div>",1623:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1623\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;MainWindow</div></div></div><div class=\"TTSummary\">Main Window is the <b>actual</b> window. Not to be confused with ssGUI::Window which lives inside MainWindow.&nbsp; You should call Renderer::RedrawObject after changing the properties of the MainWindow.&nbsp; This class should not be overwritten unless you know what you are doing</div></div>",1625:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1625\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> Render()</div></div><div class=\"TTSummary\">Renders all the entities drawn on this MainWindow. Called by ssGUI::ssGUIManager normally.</div></div>",1626:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1626\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> ClearBackBuffer()</div></div><div class=\"TTSummary\">Clears all the entities drawn on this MainWindow</div></div>",1627:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1627\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::Backend::BackendMainWindowInterface* GetBackendWindowInterface()</div></div></div>",1628:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1628\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::Backend::BackendDrawingInterface* GetBackendDrawingInterface()</div></div></div>",1629:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1629\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::ivec2 GetWindowPosition() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">See ssGUI::Backend::BackendMainWindowInterface::GetWindowPosition</div></div>",1630:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1630\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetWindowPosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">pos</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See ssGUI::Backend::BackendMainWindowInterface::SetWindowPosition</div></div>",1631:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1631\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::ivec2 GetPositionOffset() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">See ssGUI::Backend::BackendMainWindowInterface::GetPositionOffset</div></div>",1632:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1632\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetTitle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">wstring&nbsp;</td><td class=\"PName last\">title</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See ssGUI::Backend::BackendMainWindowInterface::IsVSync</div></div>",1633:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1633\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> std::wstring GetTitle() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">See ssGUI::Backend::BackendMainWindowInterface::IsVSync</div></div>",1634:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1634\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetIcon(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">ImageData&amp;&nbsp;</td><td class=\"PName last\">iconImage</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See ssGUI::Backend::BackendMainWindowInterface::SetIcon</div></div>",1635:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1635\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetVSync(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">vSync</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See ssGUI::Backend::BackendMainWindowInterface::SetVSync</div></div>",1636:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1636\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsVSync() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">See ssGUI::Backend::BackendMainWindowInterface::IsVSync</div></div>",1637:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1637\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetMSAA(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">level</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See ssGUI::Backend::BackendMainWindowInterface::SetMSAA</div></div>",1638:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1638\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual int</span> GetMSAA() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">See ssGUI::Backend::BackendMainWindowInterface::GetMSAA</div></div>",1639:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1639\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetWindowMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">WindowMode&nbsp;</td><td class=\"PName last\">WindowMode</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See ssGUI::Backend::BackendMainWindowInterface::SetWindowMode</div></div>",1640:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1640\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::Enums::WindowMode GetWindowMode() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">See ssGUI::Backend::BackendMainWindowInterface::GetWindowMode</div></div>",1641:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1641\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_FocusChanged(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">focused</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">(Internal ssGUI function) You should not be calling this function normally.</div></div>",1642:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1642\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetVisible(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">visible</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See ssGUI::Backend::BackendMainWindowInterface::SetVisible</div></div>",1643:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1643\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsVisible() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">See ssGUI::Backend::BackendMainWindowInterface::IsVisible</div></div>",1644:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1644\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> glm::ivec2 GetRelativeMousePosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">mousePos</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">A helper function that can return the relative position to mainWindow. Normally use with RealtimeInputInfo</div></div>",1645:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1645\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetWindowSize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See ssGUI::Backend::BackendMainWindowInterface::SetWindowSize</div></div>",1646:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1646\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::ivec2 GetWindowSize() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">See ssGUI::Backend::BackendMainWindowInterface::GetWindowSize</div></div>",1647:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1647\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> SetRenderContext()</div></div><div class=\"TTSummary\">See ssGUI::Backend::BackendMainWindowInterface::SetGLContext</div></div>",1648:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1648\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> SaveState()</div></div><div class=\"TTSummary\">See &lt;BackendDrawingInterface::SaveState&gt;</div></div>",1649:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1649\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> RestoreState()</div></div><div class=\"TTSummary\">See &lt;BackendDrawingInterface::RestoreState&gt;</div></div>",1650:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1650\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetEnabled(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enabled</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">Proxy function for SetVisible</div></div>",1651:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1651\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsEnabled() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">Proxy function for IsVisible</div></div>",1652:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1652\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsSelfEnabled() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">Proxy function for IsVisible</div></div>",1653:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1653\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsFocused() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See ssGUI::Backend::BackendMainWindowInterface::IsFocused</div></div>",1654:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1654\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetFocus(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">focus</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See ssGUI::Backend::BackendMainWindowInterface::SetFocus</div></div>",1655:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1655\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::vec2 GetPosition() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">This will always return (0, 0). To get the main window\'s position on the monitor, see GetWindowPosition See &lt;ssGUI::Hierarchy::GetPosition&gt;</div></div>",1656:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1656\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetPosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">position</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">This will not set the position of the main window, to do that, see SetWindowPosition See &lt;ssGUI::Hierarchy::SetPosition&gt;</div></div>",1657:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1657\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::vec2 GetGlobalPosition() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">This will always return (0, 0). To get the main window\'s position on the monitor, see GetWindowPosition See &lt;ssGUI::Hierarchy::GetGlobalPosition&gt;</div></div>",1658:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1658\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetGlobalPosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">position</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">This will not set the position of the main window, to do that, see SetWindowPosition See &lt;ssGUI::Hierarchy::SetGlobalPosition&gt;</div></div>",1659:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1659\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::vec2 GetSize() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See ssGUI::Backend::BackendMainWindowInterface::GetRenderSize</div></div>",1660:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1660\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetSize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See ssGUI::Backend::BackendMainWindowInterface::SetRenderSize</div></div>",1661:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1661\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetRenderSize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See ssGUI::Backend::BackendMainWindowInterface::SetRenderSize</div></div>",1662:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1662\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::ivec2 GetRenderSize() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See ssGUI::Backend::BackendMainWindowInterface::GetRenderSize</div></div>",1663:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1663\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::Enums::GUIObjectType GetType() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See Window::GetType</div></div>",1664:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1664\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> Close() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See Window::Close</div></div>",1665:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1665\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> AbortClosing() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See Window::AbortClosing</div></div>",1666:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1666\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> Internal_OnClose() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See Window::Internal_OnClose</div></div>",1667:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1667\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetTitlebarHeight(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">height</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">This has no effect, you cannot set titlebar height</div></div>",1668:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1668\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual int</span> GetTitlebarHeight() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">This will just return &quot;GetPositionOffset().y&quot;</div></div>",1669:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1669\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetTitlebarColor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">color</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">This has no effect, you cannot set titlebar color</div></div>",1670:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1670\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::u8vec4 GetTitlebarColor() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">This will always return white</div></div>",1671:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1671\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetAdaptiveTitlebarColor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">adaptive</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">This has no effect, you cannot set titlebar color</div></div>",1672:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1672\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsAdaptiveTitlebarColor() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">This will always return false</div></div>",1673:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1673\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> Internal_Draw()</div></div><div class=\"TTSummary\">This checks for window state before rendering</div></div>",1674:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1674\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_Draw(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendDrawingInterface*&nbsp;</td><td class=\"PName last\">drawingInterface,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">mainWindow,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">mainWindowPositionOffset</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">This checks for window state before rendering</div></div>",1675:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1675\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_Update(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendSystemInputInterface*&nbsp;</td><td class=\"PName last\">inputInterface,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">InputStatus&amp;&nbsp;</td><td class=\"PName last\">inputStatus,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">mainWindow</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See GUIObject::Internal_Update</div></div>",1676:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1676\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> MainWindow* Clone(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">cloneChildren</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Window::Clone</div></div>"});