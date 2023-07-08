﻿NDSummary.OnToolTipsLoaded("CClass:ssGUI.StandardButton",{1495:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1495\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;StandardButton</div></div></div><div class=\"TTSummary\">A standard button contains button text and with addtional visual extensions added.</div></div>",1499:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1499\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">static const</span> std::<span class=\"SHKeyword\">string</span> ListenerKey</div></div></div>",1501:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1501\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetButtonIconObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">Image*&nbsp;</td><td class=\"PName last\">image</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the icon image object, by default it will be generated.&nbsp; The new image object will be automatically parent to a wrapper.&nbsp; Passing nullptr will unset the button icon object.</div></div>",1502:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1502\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::Image* GetButtonIconObject() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the icon image object, by default it will be generated.</div></div>",1503:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1503\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetButtonTextObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">Text*&nbsp;</td><td class=\"PName last\">text</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the text object, by default it will be generated.&nbsp; The text content from the old text will be transferred to the new text object.&nbsp; Passing nullptr will unset the button icon object.</div></div>",1504:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1504\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::Text* GetButtonTextObject() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the text object, by default it will be generated.</div></div>",1505:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1505\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetAdaptiveButtonTextColor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">adaptive</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets if the button text color &quot;adapts&quot; to the button color dynamically.&nbsp; You need to call this function after setting the button text color to update the color difference stored here.</div></div>",1506:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1506\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsAdaptiveButtonTextColor() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns if the button text color &quot;adapts&quot; to the button color dynamically</div></div>",1507:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1507\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetAdaptiveButtonTextContrast(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">contrast</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets if the button text color is opposite to the button color</div></div>",1508:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1508\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsAdaptiveButtonTextContrast() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns if the button text color is opposite to the button color</div></div>",1509:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1509\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetAdaptiveButtonTextColorDifference(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec4&nbsp;</td><td class=\"PName last\">difference</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the button text color difference to button color manually (ButtonTextColor-ButtonColor) This is normally set automatically when you call SetAdaptiveButtonTextColor</div></div>",1510:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1510\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::ivec4 GetAdaptiveButtonTextColorDifference() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the button text color difference to button color (ButtonTextColor-ButtonColor)</div></div>",1511:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1511\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetButtonMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Mode&nbsp;</td><td class=\"PName last\">buttonMode</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the button mode for displaying text or icon or both</div></div>",1512:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1512\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> Mode GetButtonMode() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the button mode for displaying text or icon or both</div></div>",1513:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1513\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetButtonColor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">color</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Button::SetButtonColor</div></div>",1514:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1514\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetInteractable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">interactable</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Widget::SetInteractable</div></div>",1515:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1515\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetBlockInput(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">blockInput</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Widget::SetBlockInput</div></div>",1516:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1516\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::Enums::GUIObjectType GetType() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See Widget::GetType</div></div>",1517:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1517\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> StandardButton* Clone(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">cloneChildren</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Widget::Clone</div></div>"});