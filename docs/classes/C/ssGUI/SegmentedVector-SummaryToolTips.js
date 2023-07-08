﻿NDSummary.OnToolTipsLoaded("CClass:ssGUI.SegmentedVector",{400:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype400\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;SegmentedVector</div></div></div><div class=\"TTSummary\">This is a custom sequence container that allows random access with fast data insertion.&nbsp; This is the most suitable to store a large amount of data that needs index access.&nbsp; Although most of the data is stored contiguously, there is <b>no</b> guarantee that data are stored next to each other, even though most of them are.</div></div>",402:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype402\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline</span> SegmentedVector(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;T&gt;&amp;&nbsp;</td><td class=\"PName last\">other</td></tr></table></td><td class=\"PAfterParameters\">) : SegmentedVector()</td></tr></table></div></div><div class=\"TTSummary\">Constructor that constructs by copying a vector</div></div>",403:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype403\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline</span> SegmentedVector(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">T&nbsp;</td><td class=\"PName last\">objs[],</td></tr><tr><td class=\"first\"></td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">len</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Constructor that constructs by copying an array</div></div>",404:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype404\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline</span> SegmentedVector(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SegmentedVector&lt;T&gt;&amp;&nbsp;</td><td class=\"PName last\">other</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Constructor that constructs by copying another SegmentedVector</div></div>",405:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype405\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline</span> SegmentedVector&lt;T&gt;&amp; <span class=\"SHKeyword\">operator</span>=(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SegmentedVector&lt;T&gt;&amp;&nbsp;</td><td class=\"PName last\">other</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",406:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype406\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline</span> T&amp; <span class=\"SHKeyword\">operator</span>[](</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">size_t&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This returns the reference to the item. This operation is <b>not</b> thread safe.&nbsp; Use ssGUI::SegmentedVector::Iterator instead to be thread safe.</div></div>",407:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype407\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline</span> Iterator Begin()</div></div><div class=\"TTSummary\">Returns an iterator that points to the first element. Equals to End if container is empty.</div></div>",408:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype408\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline</span> Iterator End()</div></div><div class=\"TTSummary\">Returns an iterator that points to the end of the container, after the last element.</div></div>",409:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype409\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline</span> Iterator GetIterator(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">size_t&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns an ssGUI::SegmentedVector::Iterator pointing at index position</div></div>",410:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype410\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> SetMaxSegmentVectorSize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">size_t&nbsp;</td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This sets the size of the inner vector. By default, each inner vector holds about 512 KiB of data.</div></div>",411:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype411\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline</span> T&amp; At(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">size_t&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See operator[]</div></div>",412:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype412\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline</span> std::size_t Size() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns the size of the container</div></div>",413:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype413\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline bool</span> Empty() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns true if the container contains no elements, false otherwise.</div></div>",414:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype414\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Remove(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">size_t&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Removes an element at index position</div></div>",415:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype415\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Remove(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">size_t&nbsp;</td><td class=\"PName last\">startIndex,</td></tr><tr><td class=\"PType first\">size_t&nbsp;</td><td class=\"PName last\">endExclusiveIndex</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Removes a range of elements from startIndex position to endExclusiveIndex position where the later index is exclusive.</div></div>",416:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype416\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline void</span> Clear()</div></div><div class=\"TTSummary\">Removes all elements in the container</div></div>",417:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype417\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Add(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">T&amp;&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",418:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype418\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Add(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">T&amp;&amp;&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",419:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype419\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Add(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SegmentedVector&lt;T&gt;&amp;&nbsp;</td><td class=\"PName last\">objs</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",420:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype420\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Add(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;T&gt;&amp;&nbsp;</td><td class=\"PName last\">objs</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",421:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype421\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Add(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">T&nbsp;</td><td class=\"PName last\">objs[],</td></tr><tr><td class=\"first\"></td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">len</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",422:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype422\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Add(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">T&amp;&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",423:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype423\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Add(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">T&amp;&amp;&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",424:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype424\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Add(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SegmentedVector&lt;T&gt;&amp;&nbsp;</td><td class=\"PName last\">objs,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",425:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype425\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Add(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;T&gt;&amp;&nbsp;</td><td class=\"PName last\">objs,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",426:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype426\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Add(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">T&nbsp;</td><td class=\"PName last\">objs[],</td></tr><tr><td class=\"first\"></td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">len,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",427:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype427\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Swap(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">size_t&nbsp;</td><td class=\"PName last\">index,</td></tr><tr><td class=\"PType first\">size_t&nbsp;</td><td class=\"PName last\">index2</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Swap two elements at position index and index2</div></div>",428:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype428\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline</span> T&amp; Front()</div></div><div class=\"TTSummary\">Returns the reference to first element</div></div>",429:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype429\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline</span> T&amp; Back()</div></div><div class=\"TTSummary\">Returns the reference to last element</div></div>"});