﻿NDSummary.OnToolTipsLoaded("CClass:ssGUI.Backend.BackendSystemInputInterface",{755:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype755\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::&#8203;Backend::</span>&#8203;BackendSystemInputInterface</div></div></div><div class=\"TTSummary\">This class is the interface for getting all the inputs needed.&nbsp; **There will be changes regarding on how to get key presses and realtime input info soon.**</div></div>",757:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype757\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> HandleMessage(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MSG&nbsp;</td><td class=\"PName last\">msg</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">(Internal ssGUI function) Used by BackendMainWindow to pass Win32 event to here</div></div>",758:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype758\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> UpdateInput() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::UpdateInput</div></div>",759:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype759\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const</span> std::vector&lt;ssGUI::Enums::GenericButtonAndKeyInput&gt;&amp; GetLastButtonAndKeyPresses() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetLastButtonAndKeyPresses</div></div>",760:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype760\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const</span> std::vector&lt;ssGUI::Enums::GenericButtonAndKeyInput&gt;&amp; GetCurrentButtonAndKeyPresses() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetCurrentButtonAndKeyPresses</div></div>",761:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype761\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> IsButtonOrKeyPressExistLastFrame(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">GenericButtonAndKeyInput&nbsp;</td><td class=\"PName last\">input</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::IsButtonOrKeyPressExistLastFrame</div></div>",762:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype762\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> IsButtonOrKeyPressExistCurrentFrame(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">GenericButtonAndKeyInput&nbsp;</td><td class=\"PName last\">input</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::IsButtonOrKeyPressExistCurrentFrame</div></div>",1188:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1188\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> glm::ivec2 GetLastMousePosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendMainWindowInterface*&nbsp;</td><td class=\"PName last\">mainWindow</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Get mouse position relative to the mainWindow from last frame. If nullptr is passed, it will return global mouse position instead.</div></div>",1189:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1189\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> glm::ivec2 GetCurrentMousePosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendMainWindowInterface*&nbsp;</td><td class=\"PName last\">mainWindow</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Get mouse position relative to the mainWindow from current frame. If nullptr is passed, it will return global mouse position instead.</div></div>",1190:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1190\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetMousePosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">position,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendMainWindowInterface*&nbsp;</td><td class=\"PName last\">mainWindow</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Set the mouse posiition relative to the mainWindow. If nullptr is passed, it will set as global mouse position instead.</div></div>",766:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype766\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> GetLastMouseButton(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">MouseButton&nbsp;</td><td class=\"PName last\">button</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetLastMouseButton</div></div>",767:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype767\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> GetCurrentMouseButton(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">MouseButton&nbsp;</td><td class=\"PName last\">button</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetCurrentMouseButton</div></div>",1193:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1193\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::vec2 GetCurrentMouseScrollDelta() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Return the direction of mouse scrolling for the current frame.</div></div>",806:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype806\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual const</span> std::vector&lt;ssGUI::RealtimeInputInfo&gt;&amp; GetLastRealtimeInputs() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Return a list of inputs in order happened in last frame. The last input info should be the same as &lt;GetLastKeyPresses&gt;, GetLastMousePosition, etc...</div></div>",807:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype807\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual const</span> std::vector&lt;ssGUI::RealtimeInputInfo&gt;&amp; GetCurrentRealtimeInputs() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Return a list of inputs in order happened in current frame. The last input info should be the same as &lt;GetCurrentKeyPresses&gt;, GetCurrentMouseButton, etc...</div></div>",1196:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1196\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> std::wstring GetTextInput() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Returns all the text typed in current frame.&nbsp; Any characters in here https://&#8203;en&#8203;.wikipedia&#8203;.org&#8203;/wiki&#8203;/List_of_Unicode_characters&#8203;#Control_codes are not recorded in here.</div></div>",1197:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1197\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetCursorType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">CursorType&nbsp;</td><td class=\"PName last\">cursorType</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Sets the cursor type it is currently using.&nbsp; By default, ssGUI::ssGUIManager sets the cursor type back to normal at the end of every frame.</div></div>",1198:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1198\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::Enums::CursorType GetCursorType() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Gets the cursor type it is currently using.&nbsp; By default, ssGUI::ssGUIManager sets the cursor type back to normal at the end of every frame.</div></div>",1199:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1199\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> CreateCustomCursor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface*&nbsp;</td><td class=\"PName last\">customCursor,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">cursorName,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">cursorSize,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">hotspot</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Creates a custom cursor. The image data of customCursor is copied so it is fine to dispose it if needed.&nbsp; The size of customCurrsor image will be resized to cursorSize if needed.&nbsp; The passed in hotspot must be smaller than cursorSize, (0, 0) as top-left corner.</div></div>",1200:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1200\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetCurrentCustomCursor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">cursorName</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Sets the current custom cursor from created custom cursor. Nothing is changed if the custom cursor name cannot be found.</div></div>",1201:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1201\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> GetCurrentCustomCursor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface&amp;&nbsp;</td><td class=\"PName last\">customCursor,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&amp;&nbsp;</td><td class=\"PName last\">hotspot</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Copies the (resized) current custom cursor image data to customCursor image data and returns the hotspot of the cursor.&nbsp; customCursor &amp; hotspot are unchanged if there\'s no custom cursor.</div></div>",777:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype777\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">std::<span class=\"SHKeyword\">string</span> GetCurrentCustomCursorName() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetCurrentCustomCursorName</div></div>",1203:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1203\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> GetCustomCursor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface&amp;&nbsp;</td><td class=\"PName last\">customCursor,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">cursorName,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&amp;&nbsp;</td><td class=\"PName last\">hotspot</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Copies the (resized) custom cursor image data to customCursor image data and returns the hotspot of the cursor.&nbsp; customCursor &amp; hotspot are unchanged if there\'s no custom cursor.</div></div>",779:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype779\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> HasCustomCursor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">cursorName</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::HasCustomCursor</div></div>",780:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype780\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> UpdateCursor() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::UpdateCursor</div></div>",1206:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1206\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual int</span> AddRawEventHandler(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">bool</span>(ssGUI::Backend::BackendMainWindowInterface*, <span class=\"SHKeyword\">void</span>*)&gt;&nbsp;</td><td class=\"PName last\">handler</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div></div>",782:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype782\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> RemoveRawEventHandler(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">id</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div></div>",1208:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1208\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> ClearRawEventHandler() = <span class=\"SHNumber\">0</span></div></div></div>",784:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype784\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> ClearClipboard() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::ClearClipboard</div></div>",785:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype785\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> ClipbaordHasText() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::ClipbaordHasText</div></div>",786:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype786\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> ClipbaordHasImage() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::ClipbaordHasImage</div></div>",787:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype787\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> SetClipboardImage(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface&amp;&nbsp;</td><td class=\"PName last\">imgData</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::SetClipboardImage</div></div>",788:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype788\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> SetClipboardText(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">wstring&amp;&nbsp;</td><td class=\"PName last\">str</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::SetClipboardText</div></div>",789:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype789\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> GetClipboardImage(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface&amp;&nbsp;</td><td class=\"PName last\">imgData</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetClipboardImage</div></div>",790:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype790\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> GetClipboardText(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">wstring&amp;&nbsp;</td><td class=\"PName last\">str</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetClipboardText</div></div>",791:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype791\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">uint64_t GetElapsedTime() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetElapsedTime</div></div>",1185:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1185\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">template</span>&lt;typename T&gt; <span class=\"SHKeyword\">bool</span> IsButtonOrKeyPressExistLastFrame(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">T&nbsp;</td><td class=\"PName last\">input</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Check if the button or key is pressed last frame</div></div>",1187:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1187\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">template</span>&lt;typename T&gt; <span class=\"SHKeyword\">bool</span> IsButtonOrKeyPressExistCurrentFrame(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">T&nbsp;</td><td class=\"PName last\">input</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Check if the button or key is pressed current frame</div></div>"});