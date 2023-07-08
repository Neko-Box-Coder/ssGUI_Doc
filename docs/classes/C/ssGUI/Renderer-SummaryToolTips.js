﻿NDSummary.OnToolTipsLoaded("CClass:ssGUI.Renderer",{484:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype484\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;Renderer</div></div></div><div class=\"TTSummary\">This manages all the rendering information for a GUI Object</div></div>",486:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype486\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetEnabled(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enabled</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets if this GUI Object is enabled. Note that the logic of this GUI Object will not be called if not enabled.</div></div>",487:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype487\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsEnabled() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns if this GUI Object is enabled. Note that the logic of this GUI Object will not be called if not enabled.&nbsp; Also Note that this can be affected by parent\'s enable status.</div></div>",488:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype488\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsSelfEnabled() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns if itself is enabled excluding the enable status of its parent.&nbsp; Meaning even if the parent with visibility is false, it will return true if this GUI Object\'s enable is not set to false.</div></div>",489:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype489\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetBackgroundColor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">color</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the background color of this GUI Object</div></div>",490:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype490\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::u8vec4 GetBackgroundColor() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the background color of this GUI Object</div></div>",491:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype491\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> std::vector&lt;ssGUI::DrawingEntity&gt;&amp; Extension_GetDrawingEntities()</div></div><div class=\"TTSummary\">This returns the property of each shape, mapped to the same index location as &lt;Extension_GetDrawingCounts&gt;.&nbsp; This indicates if the shape is just a colored shape, an image or font.&nbsp; This function is mainly be called by ssGUI::Extensions::Extension::Internal_Draw.</div></div>",492:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype492\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual int</span> Extension_GetGUIObjectFirstShapeIndex() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">This returns the index of first shape created by the GUI Object.&nbsp; So for example,</div></div>",493:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype493\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> RedrawObject()</div></div><div class=\"TTSummary\">Forces the GUI Object to be redrawn. <b>Do not</b> call this in &lt;Internal_Draw&gt;.</div></div>",494:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype494\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsRedrawNeeded() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns if the GUI Object needs to be redrawn</div></div>"});