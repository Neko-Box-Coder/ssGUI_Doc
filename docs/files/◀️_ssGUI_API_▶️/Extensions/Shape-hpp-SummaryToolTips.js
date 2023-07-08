﻿NDSummary.OnToolTipsLoaded("File:◀️_ssGUI_API_▶️/Extensions/Shape.hpp",{2156:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2156\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">namespace</span> </div><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;Extensions</div></div></div></div>",2157:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2157\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::&#8203;Extensions::</span>&#8203;Shape</div></div></div><div class=\"TTSummary\">Shape extension allows adding/removing shapes in runtime on the GUI Object without too much effort. This would not work with ssGUI::MainWindow</div></div>",2159:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2159\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual int</span> AddAdditionalPolygon(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">vector&lt;glm::vec2&gt;<span class=\"SHKeyword\">const</span> &amp;&nbsp;</td><td class=\"PName last\">vertices,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">vector&lt;glm::u8vec4&gt;<span class=\"SHKeyword\">const</span> &amp;&nbsp;</td><td class=\"PName last\">colors,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">behindGUIObject</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adding additional polygon in addition to GUI Object.&nbsp; The additional shape will be appended in the list of additional shapes stored in this extension.&nbsp; This returns an ID for uniquely identifying the shape just added within this extension for getting, setting and removing it.</div></div>",2160:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2160\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual int</span> AddAdditionalPolygon(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">vector&lt;glm::vec2&gt;<span class=\"SHKeyword\">const</span> &amp;&nbsp;</td><td class=\"PName last\">vertices,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">vector&lt;glm::u8vec4&gt;<span class=\"SHKeyword\">const</span> &amp;&nbsp;</td><td class=\"PName last\">colors,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">behindGUIObject,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adding additional polygon in addition to GUI Object.&nbsp; The additional shape will be added in the list of additional shapes at index position stored in this extension.&nbsp; This returns an ID for uniquely identifying the shape just added within this extension for getting, setting and removing it.</div></div>",2161:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2161\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual int</span> AddAdditionalPolygon()</div></div><div class=\"TTSummary\">Adding additional empty polygon in addition to GUI Object.&nbsp; The additional shape will be appended in the list of additional shapes stored in this extension.&nbsp; This returns an ID for uniquely identifying the shape just added within this extension for getting, setting and removing it.</div></div>",2162:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2162\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual int</span> AddAdditionalRectangle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">pos,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">size,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">color,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">behindGUIObject</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adding additional rectangle in addition to GUI Object.&nbsp; The additional shape will be appended in the list of additional shapes stored in this extension.&nbsp; This returns an ID for uniquely identifying the shape just added within this extension for getting, setting and removing it.</div></div>",2163:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2163\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual int</span> AddAdditionalRectangle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">pos,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">size,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">color,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">behindGUIObject,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adding additional rectangle in addition to GUI Object.&nbsp; The additional shape will be added in the list of additional shapes at index position stored in this extension.&nbsp; This returns an ID for uniquely identifying the shape just added within this extension for getting, setting and removing it.</div></div>",2164:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2164\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual int</span> AddAdditionalRectangle()</div></div><div class=\"TTSummary\">Adding additional empty rectangle in addition to GUI Object.&nbsp; The additional shape will be appended in the list of additional shapes stored in this extension.&nbsp; This returns an ID for uniquely identifying the shape just added within this extension for getting, setting and removing it.</div></div>",2165:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2165\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual int</span> AddAdditionalCircle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">pos,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">size,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">color,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">behindGUIObject</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adding additional circle in addition to GUI Object.&nbsp; The additional shape will be appended in the list of additional shapes stored in this extension.&nbsp; This returns an ID for uniquely identifying the shape just added within this extension for getting, setting and removing it.</div></div>",2166:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2166\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual int</span> AddAdditionalCircle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">pos,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">size,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">color,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">behindGUIObject,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adding additional circle in addition to GUI Object.&nbsp; The additional shape will be added in the list of additional shapes at index position stored in this extension.&nbsp; This returns an ID for uniquely identifying the shape just added within this extension for getting, setting and removing it.</div></div>",2167:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2167\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual int</span> AddAdditionalCircle()</div></div><div class=\"TTSummary\">Adding additional empty circle in addition to GUI Object.&nbsp; The additional shape will be appended in the list of additional shapes stored in this extension.&nbsp; This returns an ID for uniquely identifying the shape just added within this extension for getting, setting and removing it.</div></div>",2168:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2168\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual int</span> AddAdditionalLine(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">start,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">end,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">startThickness,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">endThickness,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">startColor,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">endColor,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">behindGUIObject</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adding additional line in addition to GUI Object.&nbsp; The additional line will be appended in the list of additional shapes stored in this extension.&nbsp; This returns an ID for uniquely identifying the shape just added within this extension for getting, setting and removing it.</div></div>",2169:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2169\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual int</span> AddAdditionalLine(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">start,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">end,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">startThickness,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">endThickness,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">startColor,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">endColor,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">behindGUIObject,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adding additional line in addition to GUI Object.&nbsp; The additional line will be added in the list of additional shapes at index position stored in this extension.&nbsp; This returns an ID for uniquely identifying the shape just added within this extension for getting, setting and removing it.</div></div>",2170:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2170\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual int</span> AddAdditionalLine()</div></div><div class=\"TTSummary\">Adding additional empty line in addition to GUI Object.&nbsp; The additional line will be appended in the list of additional shapes stored in this extension.&nbsp; This returns an ID for uniquely identifying the shape just added within this extension for getting, setting and removing it.</div></div>",2171:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2171\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetAdditionalPolygon(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">id,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">vector&lt;glm::vec2&gt;<span class=\"SHKeyword\">const</span> &amp;&nbsp;</td><td class=\"PName last\">vertices,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">vector&lt;glm::u8vec4&gt;<span class=\"SHKeyword\">const</span> &amp;&nbsp;</td><td class=\"PName last\">colors,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">behindGUIObject</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This sets the additional shape with target id. The additional shape with target id is not limited to the same type, meaning rectangle or circle additional shape can be set to polygon using this function.</div></div>",2172:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2172\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetAdditionalRectangle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">id,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">pos,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">size,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">color,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">behindGUIObject</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This sets the additional shape with target id. The additional shape with target id is not limited to the same type, meaning polygon or circle additional shape can be set to rectangle using this function.</div></div>",2173:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2173\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetAdditionalCircle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">id,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">pos,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">size,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">color,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">behindGUIObject</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This sets the additional shape with target id. The additional shape with target id is not limited to the same type, meaning polygon or rectangle additional shape can be set to circle using this function.</div></div>",2174:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2174\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetAdditionalLine(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">id,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">start,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">end,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">startThickness,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">endThickness,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">startColor,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">endColor,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">behindGUIObject</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This sets the additional shape with target id. The additional shape with target id is not limited to the same type, meaning other additional shape can be set to circle using this function.</div></div>",2175:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2175\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> std::vector&lt;glm::vec2&gt;* GetAdditionalShapeVerticesWithIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This returns a pointer to the target shape vertices vector that is at target index stored in this extension.&nbsp; This should not be used for a long period of time as the vector can be reallocated somewhere else.&nbsp; Also remember to redraw the GUI Object if changing any vertices.&nbsp; Nullptr can be returned if index is invalid.</div></div>",2176:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2176\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> std::vector&lt;glm::vec2&gt;* GetAdditionalShapeVerticesWithID(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">id</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This returns a pointer to the target shape vertices vector with target id in this extension.&nbsp; This should not be used for a long period of time as the vector can be reallocated somewhere else.&nbsp; Also remember to redraw the GUI Object if changing any vertices.&nbsp; Nullptr can be returned if the id is invalid.</div></div>",2177:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2177\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> std::vector&lt;glm::u8vec4&gt;* GetAdditionalShapeColorsWithIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This returns a pointer to the target shape colors vector that is at target index stored in this extension.&nbsp; This should not be used for a long period of time as the vector can be reallocated somewhere else.&nbsp; Also remember to redraw the GUI Object if changing any vertices colors.&nbsp; Nullptr can be returned if index is invalid.</div></div>",2178:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2178\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> std::vector&lt;glm::u8vec4&gt;* GetAdditionalShapeColorsWithID(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">id</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This returns a pointer to the target shape colors vector with target id in this extension.&nbsp; This should not be used for a long period of time as the vector can be reallocated somewhere else.&nbsp; Also remember to redraw the GUI Object if changing any vertices colors.&nbsp; Nullptr can be returned if the id is invalid.</div></div>",2179:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2179\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual int</span> GetAdditionalShapesCount() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">This returns the total number of additional shapes</div></div>",2180:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2180\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> ClearAllAdditionalShapes()</div></div><div class=\"TTSummary\">This removes all the additional shapes</div></div>",2181:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2181\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> RemoveAdditionalShapeWithIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This removes the additional shape at target index stored in this extension</div></div>",2182:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2182\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> RemoveAdditionalShapeWithID(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">id</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This removes the additional shape with target id stored in this extension</div></div>",2183:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2183\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> RemoveGUIObjectShape(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This removes the shape relative to the GUI Object shape with index</div></div>",2184:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2184\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> RestoreGUIObjectShape(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This restores the shape removed by RemoveGUIObjectShape relative to the GUI Object shape with index</div></div>",2185:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2185\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsEnabled() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See Extension::IsEnabled</div></div>",2186:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2186\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_Update(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isPreUpdate,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendSystemInputInterface*&nbsp;</td><td class=\"PName last\">inputInterface,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">InputStatus&amp;&nbsp;</td><td class=\"PName last\">inputStatus,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">mainWindow</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Extension::Internal_Update</div></div>",2187:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2187\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_Draw(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isPreRender,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendDrawingInterface*&nbsp;</td><td class=\"PName last\">drawingInterface,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">mainWindow,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">mainWindowPositionOffset</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Extension::Internal_Draw</div></div>",2188:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2188\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> GetExtensionName() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See Extension::GetExtensionName</div></div>",2189:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2189\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> BindToObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">bindObj</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Extension::BindToObject</div></div>",2190:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2190\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Copy(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Extensions::</td><td class=\"PType\">Extension*&nbsp;</td><td class=\"PName last\">extension</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Extension::Copy</div></div>",2191:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2191\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ObjectsReferences* Internal_GetObjectsReferences() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See Extension::Internal_GetObjectsReferences</div></div>",2192:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2192\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> Shape* Clone() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See Extension::Clone</div></div>"});