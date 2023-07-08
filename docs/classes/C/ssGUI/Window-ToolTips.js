﻿NDContentPage.OnToolTipsLoaded({436:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype436\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetBackgroundColor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">color</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the background color of this GUI Object</div></div>",526:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype526\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetFocus(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">focus</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set this GUI Object to be focused</div></div>",527:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype527\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_SetSelfFocus(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">focus</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">(Internal ssGUI function) Set the focus of the GUI object without affect any other GUI object</div></div>",532:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype532\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;GUIObject</div></div></div><div class=\"TTSummary\">This is the implementation class for ssGUI::GUIObject. See ssGUI::GUIObject for more details about the functions</div></div>",578:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype578\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;WindowResizeDragData</div></div></div></div>",818:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype818\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;StandardWindow</div></div></div><div class=\"TTSummary\">A standard window that contains window icon, title and close button. With addtional visual and funcational extensions added.</div></div>",1560:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1560\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::Enums::GUIObjectType GetType() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns the type of this GUI Object. Note that ssGUI::Enums::GUIObjectType is a bit-operated enum class.</div></div>",1568:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1568\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> GUIObject* Clone(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">cloneChildren</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Clone function for cloning the object. Use this function instead of assignment operator or copy constructor.&nbsp; The cloned object will be allocated on the heap and the clean up will be managed by ssGUI.&nbsp; Setting cloneChildren will clone all the children recursively with all the ObjectsReferences respectively.</div></div>",1574:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1574\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;Window</div></div></div><div class=\"TTSummary\">A base classes for any window GUI Object (including MainWindow). By itself, it can be used as a window that\'s inside MainWindow.&nbsp; By default, it can be resized or move by a cursor.</div></div>",1576:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1576\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> Close()</div></div><div class=\"TTSummary\">Calling this function will triggers the &lt;ssGUI::EventCallbacks::OnWindowCloseEventCallback&gt; and sets this window\'s parent to nullptr.&nbsp; By default, the window will be deleted automatically after closing. You can change this behaviour by calling SetDeleteAfterClosed.</div></div>",1577:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1577\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsClosed() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns if this window is closed or not</div></div>",1582:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1582\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetDeleteAfterClosed(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">deleteAfterClosed</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">If sets to true, the window will be deleted automatically after being closed</div></div>",1623:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1623\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;MainWindow</div></div></div><div class=\"TTSummary\">Main Window is the <b>actual</b> window. Not to be confused with ssGUI::Window which lives inside MainWindow.&nbsp; You should call Renderer::RedrawObject after changing the properties of the MainWindow.&nbsp; This class should not be overwritten unless you know what you are doing</div></div>",818:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype818\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;StandardWindow</div></div></div><div class=\"TTSummary\">A standard window that contains window icon, title and close button. With addtional visual and funcational extensions added.</div></div>",1623:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1623\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;MainWindow</div></div></div><div class=\"TTSummary\">Main Window is the <b>actual</b> window. Not to be confused with ssGUI::Window which lives inside MainWindow.&nbsp; You should call Renderer::RedrawObject after changing the properties of the MainWindow.&nbsp; This class should not be overwritten unless you know what you are doing</div></div>"});