﻿NDSummary.OnToolTipsLoaded("CClass:ssGUI.Extensions.Layout",{1821:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1821\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::&#8203;Extensions::</span>&#8203;Layout</div></div></div><div class=\"TTSummary\">This extensions allows the children of this GUI object to be positioned and sized in a row or column fashion.</div></div>",1823:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1823\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsHorizontalLayout() <span class=\"SHKeyword\">const</span></div></div></div>",1824:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1824\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetHorizontalLayout(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">horizontal</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1825:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1825\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> AddPreferredSizeMultiplier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">sizeMultiplier</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adds a new entry for representing the size of the child to be the size of sizeMultiplier.&nbsp; 0 = 0%, 1 = 100%</div></div>",1811:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1811\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">template</span>&lt;typename... floats&gt; <span class=\"SHKeyword\">inline void</span> AddPreferredSizeMultipliers(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">sizeMultiplier,</td></tr><tr><td class=\"PModifierQualifier first\">floats...&nbsp;</td><td></td><td class=\"PName last\">sizeMultipliers</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1884:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1884\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> AddPreferredSizeMultipliers(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">sizeMultipliers[],</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">count</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1828:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1828\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetPreferredSizeMultiplier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">sizeMultiplier</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the child with the index to be the size of sizeMultiplier.&nbsp; 0 = 0%, 1 = 100%</div></div>",1829:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1829\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual float</span> GetPreferredSizeMultiplier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Returns the sizeMultiplier of the child with the index.&nbsp; 0 = 0%, 1 = 100%</div></div>",1830:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1830\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> RemovePreferredSizeMultiplier(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1831:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1831\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> ClearAllPreferredSizeMultiplier()</div></div></div>",1832:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1832\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual int</span> GerPreferredSizeMultiplierCount() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns the number of entries for PreferredSizeMultiplier.&nbsp; This will always be updated to the same number of children <b>after</b> each update.</div></div>",1833:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1833\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsChildrenResizingDisabled() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">If true, children windows can be resized</div></div>",1834:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1834\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetDisableChildrenResizing(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">disableResizing</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">If true, children windows can be resized</div></div>",1835:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1835\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsReverseOrder() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">If false, the children are positioned left to right (horizontal) or top to bottom (vertical)</div></div>",1836:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1836\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetReverseOrder(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">reverseOrder</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">If false, the children are positioned left to right (horizontal) or top to bottom (vertical)</div></div>",1837:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1837\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsCoverFullLength() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">If true, the children will be sized to cover the whole length of the container.</div></div>",1838:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1838\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetCoverFullLength(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">fullLength</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">If true, the children will be sized to cover the whole length of the container.</div></div>",1839:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1839\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsOverrideChildrenResizeTypeAndOnTop() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">If true, if will override the window children\'s resize type. This should normally be true.</div></div>",1840:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1840\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetOverrideChildrenResizeTypeAndOnTop(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">override</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">If true, if will override the window children\'s resize type. This should normally be true.</div></div>",1841:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1841\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> GetUpdateContainerMinMaxSize() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">If true, this will update the container\'s min max size to match the children\'s total min max size. This should normally be true.</div></div>",1842:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1842\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetUpdateContainerMinMaxSize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">update</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">If true, this will update the container\'s min max size to match the children\'s total min max size. This should normally be true.</div></div>",1843:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1843\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual float</span> GetPadding() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Padding for layouting the children GUI objects.&nbsp; Padding will be on all 4 sides (widget) or only on left, right and bottom sides (window).</div></div>",1844:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1844\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetPadding(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">padding</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Padding for layouting the children GUI objects.&nbsp; Padding will be on all 4 sides (widget) or only on left, right and bottom sides (window).</div></div>",1845:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1845\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual float</span> GetSpacing() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Spacing between each child</div></div>",1846:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1846\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetSpacing(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">spacing</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Spacing between each child</div></div>",1847:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1847\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetOverflow(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">overflow</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets if allows the children to overflow the container.&nbsp; If true, the layout extension will not try to cover the full length of the container even if it is set so.</div></div>",1848:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1848\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> GetOverflow() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets if allows the children to overflow the container.&nbsp; If true, the layout extension will not try to cover the full length of the container even if it is set so.</div></div>",1849:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1849\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> ExcludeObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">If a GUI Object is excluded, it will be ignored</div></div>",1850:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1850\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> UnexcludeObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">If a GUI Object is excluded, it will be ignored</div></div>",1853:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1853\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_OnRecursiveChildAdded(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">child</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">(Internal ssGUI function) Listener function when a child is being added</div></div>",1854:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1854\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_OnRecursiveChildRemoved(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">child</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">(Internal ssGUI function) Listener function when a child is being removed</div></div>",1855:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1855\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_OnChildMinMaxSizeChanged(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">child</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">(Internal ssGUI function) Listener function when a child\'s min max size is changed</div></div>",1856:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1856\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsEnabled() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See Extension::IsEnabled</div></div>",1857:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1857\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_Update(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isPreUpdate,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendSystemInputInterface*&nbsp;</td><td class=\"PName last\">inputInterface,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">InputStatus&amp;&nbsp;</td><td class=\"PName last\">inputStatus,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">mainWindow</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Extension::Internal_Update</div></div>",1858:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1858\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_Draw(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isPreRender,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendDrawingInterface*&nbsp;</td><td class=\"PName last\">drawingInterface,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">mainWindow,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">mainWindowPositionOffset</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Extension::Internal_Draw</div></div>",1859:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1859\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> GetExtensionName() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See Extension::GetExtensionName</div></div>",1860:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1860\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> BindToObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">bindObj</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Extension::BindToObject</div></div>",1861:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1861\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Copy(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Extensions::</td><td class=\"PType\">Extension*&nbsp;</td><td class=\"PName last\">extension</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Extension::Copy</div></div>",1862:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1862\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ObjectsReferences* Internal_GetObjectsReferences() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See Extension::Internal_GetObjectsReferences</div></div>",1863:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1863\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> Layout* Clone() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See Extension::Clone</div></div>"});