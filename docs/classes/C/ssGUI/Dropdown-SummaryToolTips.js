﻿NDSummary.OnToolTipsLoaded("CClass:ssGUI.Dropdown",{1474:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1474\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;Dropdown</div></div></div><div class=\"TTSummary\">A dropdown button that allows an item to be selected from the dropdown menu.</div></div>",1476:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1476\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">static const</span> std::<span class=\"SHKeyword\">string</span> ListenerKey</div></div></div>",1478:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1478\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual int</span> GetSelectedIndex() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the index of the current selected item</div></div>",1479:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1479\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetSelectedItem(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the index of the current selected item</div></div>",1480:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1480\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual int</span> AddItem(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">item</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Add an item to the dropdown menu</div></div>",1481:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1481\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetItem(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">item</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set an item to the dropdown menu</div></div>",1482:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1482\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> GetItem(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Gets the text content of an item according to the index.&nbsp; Returns empty string if index is not valid.</div></div>",1483:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1483\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> RemoveItem(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Removes the item at the index position</div></div>",1484:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1484\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> ClearItems()</div></div><div class=\"TTSummary\">Clears all items</div></div>",1485:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1485\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual int</span> GetItemsCount() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns the number of items in the dropdown menu</div></div>",1486:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1486\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::Menu* GetDropdownMenu()</div></div><div class=\"TTSummary\">Gets the dropdown menu GUI object</div></div>",1487:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1487\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetDropdownMenu(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">Menu*&nbsp;</td><td class=\"PName last\">menu</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the dropdown menu GUI object.&nbsp; The menu items in the new menu will be cleared and all the menu items from the old dropdown menu will moved to the new one.&nbsp; Passing nullptr will unset the dropdown menu object.</div></div>",1488:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1488\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetInteractable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">interactable</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Widget::SetInteractable</div></div>",1489:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1489\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetBlockInput(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">blockInput</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Widget::SetBlockInput</div></div>",1490:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1490\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::Enums::GUIObjectType GetType() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See Widget::GetType</div></div>",1491:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1491\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> Dropdown* Clone(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">cloneChildren</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Widget::Clone</div></div>",1492:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1492\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> InitiateDefaultResources() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See GUIObject::InitiateDefaultResources</div></div>",1493:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1493\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> CleanUpDefaultResources() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See GUIObject::CleanUpDefaultResources</div></div>"});