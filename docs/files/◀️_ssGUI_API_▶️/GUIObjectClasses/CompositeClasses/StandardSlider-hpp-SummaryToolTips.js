﻿NDSummary.OnToolTipsLoaded("File:◀️_ssGUI_API_▶️/GUIObjectClasses/CompositeClasses/StandardSlider.hpp",{1530:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1530\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">namespace</span> </div><div class=\"CPName\">ssGUI</div></div></div></div>",1531:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1531\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">StandardSlider</div></div></div><div class=\"TTSummary\">A standard slider that contains a title text, slider object and value text.</div></div>",1533:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1533\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetTitleTextObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">Text*&nbsp;</td><td class=\"PName last\">text</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the title text GUI Object.&nbsp; The text content of the old text GUI Object will be copied to the new one.&nbsp; The new text GUI Object will be inserted at the same place as the old one.&nbsp; Passing nullptr will unset the text GUI object.</div></div>",1534:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1534\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::Text* GetTitleTextObject() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the title text GUI Object.</div></div>",1535:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1535\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetSliderObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">Slider*&nbsp;</td><td class=\"PName last\">slider</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the actual slider GUI object.&nbsp; The new slider GUI Object will be inserted at the same place as the old one.&nbsp; Passing nullptr will unset the slider GUI object.</div></div>",1536:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1536\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::Slider* GetSliderObject() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the actual slider GUI object.</div></div>",1537:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1537\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetDisplayValueTextObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">Text*&nbsp;</td><td class=\"PName last\">text</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the display value text for showing the value of the slider.&nbsp; The new text GUI Object will be inserted at the same place as the old one.&nbsp; Passing nullptr will unset the display value text GUI object.</div></div>",1538:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1538\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::Text* GetDisplayValueTextObject() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the display value text for showing the value of the slider.</div></div>",1539:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1539\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetMinDisplayValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">min</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the minimum display value that is mapped to 0 for the actual slider value.</div></div>",1540:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1540\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual float</span> GetMinDisplayValue() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the minimum display value that is mapped to 0 for the actual slider value.</div></div>",1541:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1541\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetMaxDisplayValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">max</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the maximum display value that is mapped to 1 for the actual slider value.</div></div>",1542:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1542\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual float</span> GetMaxDisplayValue() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the maximum display value that is mapped to 1 for the actual slider value.</div></div>",1543:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1543\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetMinMaxDisplayValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">min,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">max</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See SetMinDisplayValue and SetMaxDisplayValue</div></div>",1544:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1544\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetDisplayValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">displayValue</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the display value which is translated to ssGUI::Slider::SetSliderValue from the mapped minimum and maximum display value.</div></div>",1545:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1545\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual float</span> GetDisplayValue() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the display value which is translated from ssGUI::Slider::GetSliderValue from the mapped minimum and maximum display value.</div></div>",1546:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1546\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetDisplayStepValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">step</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the stepping value which is translated to ssGUI::Slider::SetSnapInterval from the mapped minimum and maximum display value.</div></div>",1547:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1547\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual float</span> GetDisplayStepValue() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the stepping value which is translated from ssGUI::Slider::GetSnapInterval from the mapped minimum and maximum display value.</div></div>",1548:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1548\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetDisplayIntegerValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">displayInteger</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets if integer is shown instead of float.&nbsp; Please note that the underlying display value is still float, but just rounded to integer when displaying in value text GUI Object.</div></div>",1549:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1549\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsDisplayIntegerValue() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns if integer is shown instead of float.</div></div>",1550:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1550\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetDisplayDecimalPlaces(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">decimalPlaces</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets how many decimal places are shown.&nbsp; This has no effect if IsDisplayIntegerValue is false.&nbsp; Please note that the underlying display value is not affected by this, but just discarding the extra decimals when displaying in value text GUI Object.</div></div>",1551:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1551\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual int</span> GetDisplayDecimalPlaces() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns how many decimal places are shown.</div></div>",1552:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1552\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetInteractable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">interactable</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See &lt;Widget::SetInteractable&gt;</div></div>",1553:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1553\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetBlockInput(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">blockInput</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See &lt;Widget::SetBlockInput&gt;</div></div>",1554:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1554\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::Enums::GUIObjectType GetType() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See &lt;Widget::GetType&gt;</div></div>",1555:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1555\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> StandardSlider* Clone(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">cloneChildren</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See &lt;Widget::Clone&gt;</div></div>"});