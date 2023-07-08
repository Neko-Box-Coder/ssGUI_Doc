﻿NDSummary.OnToolTipsLoaded("File:◀️_ssGUI_API_▶️/Backend/X11_OpenGL3_3/BackendMainWindowX11_OpenGL3_3.hpp",{831:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype831\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">namespace</span> </div><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;Backend</div></div></div></div>",833:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype833\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">::Display* WindowDisplay</div></div></div>",834:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype834\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">::Colormap WindowColormap</div></div></div>",835:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype835\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">::Window WindowId</div></div></div>",836:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype836\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">GLXContext WindowContext</div></div></div>",837:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype837\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">::Atom WindowCloseEventId</div></div></div>",838:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype838\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">XIC XInputContext</div></div></div>",839:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype839\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::&#8203;Backend::</span>&#8203;BackendMainWindowInterface</div></div></div><div class=\"TTSummary\">For functions explainations, please see BackendMainWindowInterface. Normally you don\'t need to deal with this class</div></div>",841:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype841\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetWindowPosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">pos</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::SetWindowPosition</div></div>",842:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype842\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">glm::ivec2 GetWindowPosition() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::GetWindowPosition</div></div>",843:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype843\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">glm::ivec2 GetPositionOffset() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::GetPositionOffset</div></div>",844:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype844\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetWindowSize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::SetWindowSize</div></div>",845:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype845\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">glm::ivec2 GetWindowSize() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::GetWindowSize</div></div>",846:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype846\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetRenderSize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::SetRenderSize</div></div>",847:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype847\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">glm::ivec2 GetRenderSize() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::GetRenderSize</div></div>",848:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype848\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> IsClosed() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::IsClosed</div></div>",849:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype849\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> Close() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::Close</div></div>",850:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype850\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> AbortClosing() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::AbortClosing</div></div>",851:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype851\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> AddOnCloseEvent(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">void</span>()&gt;&nbsp;</td><td class=\"PName last\">func</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::AddOnCloseEvent</div></div>",852:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype852\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> RemoveOnCloseEvent(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::RemoveOnCloseEvent</div></div>",853:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype853\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetTitle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">wstring&nbsp;</td><td class=\"PName last\">title</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::SetTitle</div></div>",854:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype854\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">std::wstring GetTitle() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::GetTitle</div></div>",855:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype855\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetIcon(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface&amp;&nbsp;</td><td class=\"PName last\">iconImage</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::SetIcon</div></div>",856:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype856\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetVisible(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">visible</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::SetVisible</div></div>",857:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype857\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> IsVisible() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::IsVisible</div></div>",858:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype858\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetVSync(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">vSync</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::SetVSync</div></div>",859:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype859\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> IsVSync() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::IsVSync</div></div>",860:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype860\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetFocus(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">focus,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">externalByUser</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::SetFocus</div></div>",861:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype861\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> IsFocused() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::IsFocused</div></div>",862:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype862\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> AddFocusChangedByUserEvent(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">void</span>(<span class=\"SHKeyword\">bool</span> focused)&gt;&nbsp;</td><td class=\"PName last\">func</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::AddFocusChangedByUserEvent</div></div>",863:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype863\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> RemoveFocusChangedByUserEvent(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::RemoveFocusChangedByUserEvent</div></div>",864:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype864\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetMSAA(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">level</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::SetMSAA</div></div>",865:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype865\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">int</span> GetMSAA() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::GetMSAA</div></div>",866:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype866\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetTitlebar(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">titlebar</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::SetTitlebar</div></div>",867:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype867\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> HasTitlebar() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::HasTitlebar</div></div>",868:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype868\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetResizable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">resizable</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::SetResizable</div></div>",869:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype869\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> IsResizable() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::IsResizable</div></div>",870:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype870\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetCloseButton(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">closeButton</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::SetCloseButton</div></div>",871:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype871\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> HasCloseButton() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::HasCloseButton</div></div>",872:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype872\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetWindowMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">WindowMode&nbsp;</td><td class=\"PName last\">windowMode</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::SetWindowMode</div></div>",873:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype873\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">ssGUI::Enums::WindowMode GetWindowMode() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::GetWindowMode</div></div>",874:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype874\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> SetGLContext() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::SetGLContext</div></div>",875:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype875\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">BackendMainWindowInterface* Clone() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::Clone</div></div>",876:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype876\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span>* GetRawHandle() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendMainWindowInterface::GetRawHandle</div></div>"});