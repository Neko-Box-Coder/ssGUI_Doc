﻿NDSummary.OnToolTipsLoaded("File:◀️_ssGUI_API_▶️/Backend/SFML/BackendImageSFML.hpp",{1088:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1088\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">namespace</span> </div><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;Backend</div></div></div></div>",1089:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1089\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::&#8203;Backend::</span>&#8203;BackendImageSFML</div></div></div><div class=\"TTSummary\">For functions explainations, please see BackendImageInterface. Normally you don\'t need to deal with this class</div></div>",1091:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Gets the SFML Texture object sf::Texture* GetGPUTextureP();</div></div>",1092:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1092\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span>* GetRawHandle() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendImageInterface::GetRawHandle</div></div>",1093:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1093\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> IsValid() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendImageInterface::IsValid</div></div>",1094:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1094\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> LoadFromPath(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">path</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendImageInterface::LoadFromPath The supported image formats are bmp, png, tga, jpg, gif, psd, hdr and pic. Some format options are not supported, like progressive jpeg.</div></div>",1095:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1095\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> LoadImgFileFromMemory(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">void</span> *&nbsp;</td><td class=\"PName last\">dataPtr,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendImageInterface::LoadImgFileFromMemory The supported image formats are bmp, png, tga, jpg, gif, psd, hdr and pic. Some format options are not supported, like progressive jpeg.</div></div>",1096:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1096\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> LoadRawFromMemory(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">void</span> *&nbsp;</td><td class=\"PName last\">dataPtr,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">ImageFormat&nbsp;</td><td class=\"PName last\">format,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">imageSize</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendImageInterface::LoadRawFromMemory</div></div>",1097:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1097\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">glm::ivec2 GetSize() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendImageInterface::GetSize</div></div>",1098:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1098\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span>* GetPixelPtr(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">ImageFormat&amp;&nbsp;</td><td class=\"PName last\">format</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div></div><div class=\"TTSummary\">SFML does not support editting pixels from pointer directly.&nbsp; This will return nullptr</div></div>",1099:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1099\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> UpdateCache() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">This is not used, SFML handles image memory internally</div></div>",1100:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1100\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Internal_AddBackendDrawingRecord(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendDrawingInterface*&nbsp;</td><td class=\"PName last\">backendDrawing</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">This is not used, SFML handles image memory internally</div></div>",1101:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1101\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Internal_RemoveBackendDrawingRecord(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendDrawingInterface*&nbsp;</td><td class=\"PName last\">backendDrawing</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">This is not used, SFML handles image memory internally</div></div>",1102:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1102\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">ssGUI::Backend::BackendImageInterface* Clone() <span class=\"SHKeyword\">override</span></div></div></div>"});