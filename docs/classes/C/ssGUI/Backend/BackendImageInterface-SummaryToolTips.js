﻿NDSummary.OnToolTipsLoaded("CClass:ssGUI.Backend.BackendImageInterface",{1130:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1130\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::&#8203;Backend::</span>&#8203;BackendImageInterface</div></div></div><div class=\"TTSummary\">This allows transferring the image data from the host memory to the gpu memory</div></div>",1132:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1132\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span>* GetRawHandle() = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Returns the actual backend handle if the image data is valid. Otherwise returns nullptr.</div></div>",1133:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1133\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsValid() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Returns true if image is loaded</div></div>",1134:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1134\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> LoadFromPath(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">path</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Loads the image from relative or absolute path</div></div>",1135:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1135\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> LoadImgFileFromMemory(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">void</span> *&nbsp;</td><td class=\"PName last\">dataPtr,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">size_t&nbsp;</td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Loads an image file from memory with specified size in bytes</div></div>",1136:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1136\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> LoadRawFromMemory(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">void</span> *&nbsp;</td><td class=\"PName last\">dataPtr,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">ImageFormat&nbsp;</td><td class=\"PName last\">format,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">imageSize</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">This loads an image with specified image format in memory</div></div>",1137:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1137\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::ivec2 GetSize() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Returns the size of the image</div></div>",1138:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1138\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span>* GetPixelPtr(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">ImageFormat&amp;&nbsp;</td><td class=\"PName last\">format</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Returns the pixel data pointer of the image and also the format of the image</div></div>",1139:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1139\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> UpdateCache() = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Updates the drawing interfaces\' cache with the current image</div></div>",1140:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1140\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_AddBackendDrawingRecord(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendDrawingInterface*&nbsp;</td><td class=\"PName last\">backendDrawing</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">(Internal ssGUI function) Adds a linking record of indicating this image is stored in backend drawing.&nbsp; By default no linking record will be cloned when Clone is called.</div></div>",1141:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1141\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_RemoveBackendDrawingRecord(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendDrawingInterface*&nbsp;</td><td class=\"PName last\">backendDrawing</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">(Internal ssGUI function) Removes a linking record of indicating this image is stored in backend drawing.&nbsp; By default no linking record will be cloned when Clone is called.</div></div>",1142:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1142\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> BackendImageInterface* Clone() = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Clones the backend image</div></div>"});