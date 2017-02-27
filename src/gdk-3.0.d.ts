/**
 * Gdk.d.ts
 *
 */
declare module 'Gdk' {
    import * as GObject from "GObject"
    import * as Gio from "Gio"
    import * as Pango from "Pango"
    export const BUTTON_MIDDLE:number
    export const BUTTON_PRIMARY:number
    export const BUTTON_SECONDARY:number
    export const CURRENT_TIME:number
    export const EVENT_PROPAGATE:boolean
    export const EVENT_STOP:boolean
    export const KEY_0:number
    export const KEY_1:number
    export const KEY_2:number
    export const KEY_3:number
    export const KEY_3270_AltCursor:number
    export const KEY_3270_Attn:number
    export const KEY_3270_BackTab:number
    export const KEY_3270_ChangeScreen:number
    export const KEY_3270_Copy:number
    export const KEY_3270_CursorBlink:number
    export const KEY_3270_CursorSelect:number
    export const KEY_3270_DeleteWord:number
    export const KEY_3270_Duplicate:number
    export const KEY_3270_Enter:number
    export const KEY_3270_EraseEOF:number
    export const KEY_3270_EraseInput:number
    export const KEY_3270_ExSelect:number
    export const KEY_3270_FieldMark:number
    export const KEY_3270_Ident:number
    export const KEY_3270_Jump:number
    export const KEY_3270_KeyClick:number
    export const KEY_3270_Left2:number
    export const KEY_3270_PA1:number
    export const KEY_3270_PA2:number
    export const KEY_3270_PA3:number
    export const KEY_3270_Play:number
    export const KEY_3270_PrintScreen:number
    export const KEY_3270_Quit:number
    export const KEY_3270_Record:number
    export const KEY_3270_Reset:number
    export const KEY_3270_Right2:number
    export const KEY_3270_Rule:number
    export const KEY_3270_Setup:number
    export const KEY_3270_Test:number
    export const KEY_4:number
    export const KEY_5:number
    export const KEY_6:number
    export const KEY_7:number
    export const KEY_8:number
    export const KEY_9:number
    export const KEY_A:number
    export const KEY_AE:number
    export const KEY_Aacute:number
    export const KEY_Abelowdot:number
    export const KEY_Abreve:number
    export const KEY_Abreveacute:number
    export const KEY_Abrevebelowdot:number
    export const KEY_Abrevegrave:number
    export const KEY_Abrevehook:number
    export const KEY_Abrevetilde:number
    export const KEY_AccessX_Enable:number
    export const KEY_AccessX_Feedback_Enable:number
    export const KEY_Acircumflex:number
    export const KEY_Acircumflexacute:number
    export const KEY_Acircumflexbelowdot:number
    export const KEY_Acircumflexgrave:number
    export const KEY_Acircumflexhook:number
    export const KEY_Acircumflextilde:number
    export const KEY_AddFavorite:number
    export const KEY_Adiaeresis:number
    export const KEY_Agrave:number
    export const KEY_Ahook:number
    export const KEY_Alt_L:number
    export const KEY_Alt_R:number
    export const KEY_Amacron:number
    export const KEY_Aogonek:number
    export const KEY_ApplicationLeft:number
    export const KEY_ApplicationRight:number
    export const KEY_Arabic_0:number
    export const KEY_Arabic_1:number
    export const KEY_Arabic_2:number
    export const KEY_Arabic_3:number
    export const KEY_Arabic_4:number
    export const KEY_Arabic_5:number
    export const KEY_Arabic_6:number
    export const KEY_Arabic_7:number
    export const KEY_Arabic_8:number
    export const KEY_Arabic_9:number
    export const KEY_Arabic_ain:number
    export const KEY_Arabic_alef:number
    export const KEY_Arabic_alefmaksura:number
    export const KEY_Arabic_beh:number
    export const KEY_Arabic_comma:number
    export const KEY_Arabic_dad:number
    export const KEY_Arabic_dal:number
    export const KEY_Arabic_damma:number
    export const KEY_Arabic_dammatan:number
    export const KEY_Arabic_ddal:number
    export const KEY_Arabic_farsi_yeh:number
    export const KEY_Arabic_fatha:number
    export const KEY_Arabic_fathatan:number
    export const KEY_Arabic_feh:number
    export const KEY_Arabic_fullstop:number
    export const KEY_Arabic_gaf:number
    export const KEY_Arabic_ghain:number
    export const KEY_Arabic_ha:number
    export const KEY_Arabic_hah:number
    export const KEY_Arabic_hamza:number
    export const KEY_Arabic_hamza_above:number
    export const KEY_Arabic_hamza_below:number
    export const KEY_Arabic_hamzaonalef:number
    export const KEY_Arabic_hamzaonwaw:number
    export const KEY_Arabic_hamzaonyeh:number
    export const KEY_Arabic_hamzaunderalef:number
    export const KEY_Arabic_heh:number
    export const KEY_Arabic_heh_doachashmee:number
    export const KEY_Arabic_heh_goal:number
    export const KEY_Arabic_jeem:number
    export const KEY_Arabic_jeh:number
    export const KEY_Arabic_kaf:number
    export const KEY_Arabic_kasra:number
    export const KEY_Arabic_kasratan:number
    export const KEY_Arabic_keheh:number
    export const KEY_Arabic_khah:number
    export const KEY_Arabic_lam:number
    export const KEY_Arabic_madda_above:number
    export const KEY_Arabic_maddaonalef:number
    export const KEY_Arabic_meem:number
    export const KEY_Arabic_noon:number
    export const KEY_Arabic_noon_ghunna:number
    export const KEY_Arabic_peh:number
    export const KEY_Arabic_percent:number
    export const KEY_Arabic_qaf:number
    export const KEY_Arabic_question_mark:number
    export const KEY_Arabic_ra:number
    export const KEY_Arabic_rreh:number
    export const KEY_Arabic_sad:number
    export const KEY_Arabic_seen:number
    export const KEY_Arabic_semicolon:number
    export const KEY_Arabic_shadda:number
    export const KEY_Arabic_sheen:number
    export const KEY_Arabic_sukun:number
    export const KEY_Arabic_superscript_alef:number
    export const KEY_Arabic_switch:number
    export const KEY_Arabic_tah:number
    export const KEY_Arabic_tatweel:number
    export const KEY_Arabic_tcheh:number
    export const KEY_Arabic_teh:number
    export const KEY_Arabic_tehmarbuta:number
    export const KEY_Arabic_thal:number
    export const KEY_Arabic_theh:number
    export const KEY_Arabic_tteh:number
    export const KEY_Arabic_veh:number
    export const KEY_Arabic_waw:number
    export const KEY_Arabic_yeh:number
    export const KEY_Arabic_yeh_baree:number
    export const KEY_Arabic_zah:number
    export const KEY_Arabic_zain:number
    export const KEY_Aring:number
    export const KEY_Armenian_AT:number
    export const KEY_Armenian_AYB:number
    export const KEY_Armenian_BEN:number
    export const KEY_Armenian_CHA:number
    export const KEY_Armenian_DA:number
    export const KEY_Armenian_DZA:number
    export const KEY_Armenian_E:number
    export const KEY_Armenian_FE:number
    export const KEY_Armenian_GHAT:number
    export const KEY_Armenian_GIM:number
    export const KEY_Armenian_HI:number
    export const KEY_Armenian_HO:number
    export const KEY_Armenian_INI:number
    export const KEY_Armenian_JE:number
    export const KEY_Armenian_KE:number
    export const KEY_Armenian_KEN:number
    export const KEY_Armenian_KHE:number
    export const KEY_Armenian_LYUN:number
    export const KEY_Armenian_MEN:number
    export const KEY_Armenian_NU:number
    export const KEY_Armenian_O:number
    export const KEY_Armenian_PE:number
    export const KEY_Armenian_PYUR:number
    export const KEY_Armenian_RA:number
    export const KEY_Armenian_RE:number
    export const KEY_Armenian_SE:number
    export const KEY_Armenian_SHA:number
    export const KEY_Armenian_TCHE:number
    export const KEY_Armenian_TO:number
    export const KEY_Armenian_TSA:number
    export const KEY_Armenian_TSO:number
    export const KEY_Armenian_TYUN:number
    export const KEY_Armenian_VEV:number
    export const KEY_Armenian_VO:number
    export const KEY_Armenian_VYUN:number
    export const KEY_Armenian_YECH:number
    export const KEY_Armenian_ZA:number
    export const KEY_Armenian_ZHE:number
    export const KEY_Armenian_accent:number
    export const KEY_Armenian_amanak:number
    export const KEY_Armenian_apostrophe:number
    export const KEY_Armenian_at:number
    export const KEY_Armenian_ayb:number
    export const KEY_Armenian_ben:number
    export const KEY_Armenian_but:number
    export const KEY_Armenian_cha:number
    export const KEY_Armenian_da:number
    export const KEY_Armenian_dza:number
    export const KEY_Armenian_e:number
    export const KEY_Armenian_exclam:number
    export const KEY_Armenian_fe:number
    export const KEY_Armenian_full_stop:number
    export const KEY_Armenian_ghat:number
    export const KEY_Armenian_gim:number
    export const KEY_Armenian_hi:number
    export const KEY_Armenian_ho:number
    export const KEY_Armenian_hyphen:number
    export const KEY_Armenian_ini:number
    export const KEY_Armenian_je:number
    export const KEY_Armenian_ke:number
    export const KEY_Armenian_ken:number
    export const KEY_Armenian_khe:number
    export const KEY_Armenian_ligature_ew:number
    export const KEY_Armenian_lyun:number
    export const KEY_Armenian_men:number
    export const KEY_Armenian_nu:number
    export const KEY_Armenian_o:number
    export const KEY_Armenian_paruyk:number
    export const KEY_Armenian_pe:number
    export const KEY_Armenian_pyur:number
    export const KEY_Armenian_question:number
    export const KEY_Armenian_ra:number
    export const KEY_Armenian_re:number
    export const KEY_Armenian_se:number
    export const KEY_Armenian_separation_mark:number
    export const KEY_Armenian_sha:number
    export const KEY_Armenian_shesht:number
    export const KEY_Armenian_tche:number
    export const KEY_Armenian_to:number
    export const KEY_Armenian_tsa:number
    export const KEY_Armenian_tso:number
    export const KEY_Armenian_tyun:number
    export const KEY_Armenian_verjaket:number
    export const KEY_Armenian_vev:number
    export const KEY_Armenian_vo:number
    export const KEY_Armenian_vyun:number
    export const KEY_Armenian_yech:number
    export const KEY_Armenian_yentamna:number
    export const KEY_Armenian_za:number
    export const KEY_Armenian_zhe:number
    export const KEY_Atilde:number
    export const KEY_AudibleBell_Enable:number
    export const KEY_AudioCycleTrack:number
    export const KEY_AudioForward:number
    export const KEY_AudioLowerVolume:number
    export const KEY_AudioMedia:number
    export const KEY_AudioMicMute:number
    export const KEY_AudioMute:number
    export const KEY_AudioNext:number
    export const KEY_AudioPause:number
    export const KEY_AudioPlay:number
    export const KEY_AudioPrev:number
    export const KEY_AudioRaiseVolume:number
    export const KEY_AudioRandomPlay:number
    export const KEY_AudioRecord:number
    export const KEY_AudioRepeat:number
    export const KEY_AudioRewind:number
    export const KEY_AudioStop:number
    export const KEY_Away:number
    export const KEY_B:number
    export const KEY_Babovedot:number
    export const KEY_Back:number
    export const KEY_BackForward:number
    export const KEY_BackSpace:number
    export const KEY_Battery:number
    export const KEY_Begin:number
    export const KEY_Blue:number
    export const KEY_Bluetooth:number
    export const KEY_Book:number
    export const KEY_BounceKeys_Enable:number
    export const KEY_Break:number
    export const KEY_BrightnessAdjust:number
    export const KEY_Byelorussian_SHORTU:number
    export const KEY_Byelorussian_shortu:number
    export const KEY_C:number
    export const KEY_CD:number
    export const KEY_CH:number
    export const KEY_C_H:number
    export const KEY_C_h:number
    export const KEY_Cabovedot:number
    export const KEY_Cacute:number
    export const KEY_Calculator:number
    export const KEY_Calendar:number
    export const KEY_Cancel:number
    export const KEY_Caps_Lock:number
    export const KEY_Ccaron:number
    export const KEY_Ccedilla:number
    export const KEY_Ccircumflex:number
    export const KEY_Ch:number
    export const KEY_Clear:number
    export const KEY_ClearGrab:number
    export const KEY_Close:number
    export const KEY_Codeinput:number
    export const KEY_ColonSign:number
    export const KEY_Community:number
    export const KEY_ContrastAdjust:number
    export const KEY_Control_L:number
    export const KEY_Control_R:number
    export const KEY_Copy:number
    export const KEY_CruzeiroSign:number
    export const KEY_Cut:number
    export const KEY_CycleAngle:number
    export const KEY_Cyrillic_A:number
    export const KEY_Cyrillic_BE:number
    export const KEY_Cyrillic_CHE:number
    export const KEY_Cyrillic_CHE_descender:number
    export const KEY_Cyrillic_CHE_vertstroke:number
    export const KEY_Cyrillic_DE:number
    export const KEY_Cyrillic_DZHE:number
    export const KEY_Cyrillic_E:number
    export const KEY_Cyrillic_EF:number
    export const KEY_Cyrillic_EL:number
    export const KEY_Cyrillic_EM:number
    export const KEY_Cyrillic_EN:number
    export const KEY_Cyrillic_EN_descender:number
    export const KEY_Cyrillic_ER:number
    export const KEY_Cyrillic_ES:number
    export const KEY_Cyrillic_GHE:number
    export const KEY_Cyrillic_GHE_bar:number
    export const KEY_Cyrillic_HA:number
    export const KEY_Cyrillic_HARDSIGN:number
    export const KEY_Cyrillic_HA_descender:number
    export const KEY_Cyrillic_I:number
    export const KEY_Cyrillic_IE:number
    export const KEY_Cyrillic_IO:number
    export const KEY_Cyrillic_I_macron:number
    export const KEY_Cyrillic_JE:number
    export const KEY_Cyrillic_KA:number
    export const KEY_Cyrillic_KA_descender:number
    export const KEY_Cyrillic_KA_vertstroke:number
    export const KEY_Cyrillic_LJE:number
    export const KEY_Cyrillic_NJE:number
    export const KEY_Cyrillic_O:number
    export const KEY_Cyrillic_O_bar:number
    export const KEY_Cyrillic_PE:number
    export const KEY_Cyrillic_SCHWA:number
    export const KEY_Cyrillic_SHA:number
    export const KEY_Cyrillic_SHCHA:number
    export const KEY_Cyrillic_SHHA:number
    export const KEY_Cyrillic_SHORTI:number
    export const KEY_Cyrillic_SOFTSIGN:number
    export const KEY_Cyrillic_TE:number
    export const KEY_Cyrillic_TSE:number
    export const KEY_Cyrillic_U:number
    export const KEY_Cyrillic_U_macron:number
    export const KEY_Cyrillic_U_straight:number
    export const KEY_Cyrillic_U_straight_bar:number
    export const KEY_Cyrillic_VE:number
    export const KEY_Cyrillic_YA:number
    export const KEY_Cyrillic_YERU:number
    export const KEY_Cyrillic_YU:number
    export const KEY_Cyrillic_ZE:number
    export const KEY_Cyrillic_ZHE:number
    export const KEY_Cyrillic_ZHE_descender:number
    export const KEY_Cyrillic_a:number
    export const KEY_Cyrillic_be:number
    export const KEY_Cyrillic_che:number
    export const KEY_Cyrillic_che_descender:number
    export const KEY_Cyrillic_che_vertstroke:number
    export const KEY_Cyrillic_de:number
    export const KEY_Cyrillic_dzhe:number
    export const KEY_Cyrillic_e:number
    export const KEY_Cyrillic_ef:number
    export const KEY_Cyrillic_el:number
    export const KEY_Cyrillic_em:number
    export const KEY_Cyrillic_en:number
    export const KEY_Cyrillic_en_descender:number
    export const KEY_Cyrillic_er:number
    export const KEY_Cyrillic_es:number
    export const KEY_Cyrillic_ghe:number
    export const KEY_Cyrillic_ghe_bar:number
    export const KEY_Cyrillic_ha:number
    export const KEY_Cyrillic_ha_descender:number
    export const KEY_Cyrillic_hardsign:number
    export const KEY_Cyrillic_i:number
    export const KEY_Cyrillic_i_macron:number
    export const KEY_Cyrillic_ie:number
    export const KEY_Cyrillic_io:number
    export const KEY_Cyrillic_je:number
    export const KEY_Cyrillic_ka:number
    export const KEY_Cyrillic_ka_descender:number
    export const KEY_Cyrillic_ka_vertstroke:number
    export const KEY_Cyrillic_lje:number
    export const KEY_Cyrillic_nje:number
    export const KEY_Cyrillic_o:number
    export const KEY_Cyrillic_o_bar:number
    export const KEY_Cyrillic_pe:number
    export const KEY_Cyrillic_schwa:number
    export const KEY_Cyrillic_sha:number
    export const KEY_Cyrillic_shcha:number
    export const KEY_Cyrillic_shha:number
    export const KEY_Cyrillic_shorti:number
    export const KEY_Cyrillic_softsign:number
    export const KEY_Cyrillic_te:number
    export const KEY_Cyrillic_tse:number
    export const KEY_Cyrillic_u:number
    export const KEY_Cyrillic_u_macron:number
    export const KEY_Cyrillic_u_straight:number
    export const KEY_Cyrillic_u_straight_bar:number
    export const KEY_Cyrillic_ve:number
    export const KEY_Cyrillic_ya:number
    export const KEY_Cyrillic_yeru:number
    export const KEY_Cyrillic_yu:number
    export const KEY_Cyrillic_ze:number
    export const KEY_Cyrillic_zhe:number
    export const KEY_Cyrillic_zhe_descender:number
    export const KEY_D:number
    export const KEY_DOS:number
    export const KEY_Dabovedot:number
    export const KEY_Dcaron:number
    export const KEY_Delete:number
    export const KEY_Display:number
    export const KEY_Documents:number
    export const KEY_DongSign:number
    export const KEY_Down:number
    export const KEY_Dstroke:number
    export const KEY_E:number
    export const KEY_ENG:number
    export const KEY_ETH:number
    export const KEY_EZH:number
    export const KEY_Eabovedot:number
    export const KEY_Eacute:number
    export const KEY_Ebelowdot:number
    export const KEY_Ecaron:number
    export const KEY_Ecircumflex:number
    export const KEY_Ecircumflexacute:number
    export const KEY_Ecircumflexbelowdot:number
    export const KEY_Ecircumflexgrave:number
    export const KEY_Ecircumflexhook:number
    export const KEY_Ecircumflextilde:number
    export const KEY_EcuSign:number
    export const KEY_Ediaeresis:number
    export const KEY_Egrave:number
    export const KEY_Ehook:number
    export const KEY_Eisu_Shift:number
    export const KEY_Eisu_toggle:number
    export const KEY_Eject:number
    export const KEY_Emacron:number
    export const KEY_End:number
    export const KEY_Eogonek:number
    export const KEY_Escape:number
    export const KEY_Eth:number
    export const KEY_Etilde:number
    export const KEY_EuroSign:number
    export const KEY_Excel:number
    export const KEY_Execute:number
    export const KEY_Explorer:number
    export const KEY_F:number
    export const KEY_F1:number
    export const KEY_F10:number
    export const KEY_F11:number
    export const KEY_F12:number
    export const KEY_F13:number
    export const KEY_F14:number
    export const KEY_F15:number
    export const KEY_F16:number
    export const KEY_F17:number
    export const KEY_F18:number
    export const KEY_F19:number
    export const KEY_F2:number
    export const KEY_F20:number
    export const KEY_F21:number
    export const KEY_F22:number
    export const KEY_F23:number
    export const KEY_F24:number
    export const KEY_F25:number
    export const KEY_F26:number
    export const KEY_F27:number
    export const KEY_F28:number
    export const KEY_F29:number
    export const KEY_F3:number
    export const KEY_F30:number
    export const KEY_F31:number
    export const KEY_F32:number
    export const KEY_F33:number
    export const KEY_F34:number
    export const KEY_F35:number
    export const KEY_F4:number
    export const KEY_F5:number
    export const KEY_F6:number
    export const KEY_F7:number
    export const KEY_F8:number
    export const KEY_F9:number
    export const KEY_FFrancSign:number
    export const KEY_Fabovedot:number
    export const KEY_Farsi_0:number
    export const KEY_Farsi_1:number
    export const KEY_Farsi_2:number
    export const KEY_Farsi_3:number
    export const KEY_Farsi_4:number
    export const KEY_Farsi_5:number
    export const KEY_Farsi_6:number
    export const KEY_Farsi_7:number
    export const KEY_Farsi_8:number
    export const KEY_Farsi_9:number
    export const KEY_Farsi_yeh:number
    export const KEY_Favorites:number
    export const KEY_Finance:number
    export const KEY_Find:number
    export const KEY_First_Virtual_Screen:number
    export const KEY_Forward:number
    export const KEY_FrameBack:number
    export const KEY_FrameForward:number
    export const KEY_G:number
    export const KEY_Gabovedot:number
    export const KEY_Game:number
    export const KEY_Gbreve:number
    export const KEY_Gcaron:number
    export const KEY_Gcedilla:number
    export const KEY_Gcircumflex:number
    export const KEY_Georgian_an:number
    export const KEY_Georgian_ban:number
    export const KEY_Georgian_can:number
    export const KEY_Georgian_char:number
    export const KEY_Georgian_chin:number
    export const KEY_Georgian_cil:number
    export const KEY_Georgian_don:number
    export const KEY_Georgian_en:number
    export const KEY_Georgian_fi:number
    export const KEY_Georgian_gan:number
    export const KEY_Georgian_ghan:number
    export const KEY_Georgian_hae:number
    export const KEY_Georgian_har:number
    export const KEY_Georgian_he:number
    export const KEY_Georgian_hie:number
    export const KEY_Georgian_hoe:number
    export const KEY_Georgian_in:number
    export const KEY_Georgian_jhan:number
    export const KEY_Georgian_jil:number
    export const KEY_Georgian_kan:number
    export const KEY_Georgian_khar:number
    export const KEY_Georgian_las:number
    export const KEY_Georgian_man:number
    export const KEY_Georgian_nar:number
    export const KEY_Georgian_on:number
    export const KEY_Georgian_par:number
    export const KEY_Georgian_phar:number
    export const KEY_Georgian_qar:number
    export const KEY_Georgian_rae:number
    export const KEY_Georgian_san:number
    export const KEY_Georgian_shin:number
    export const KEY_Georgian_tan:number
    export const KEY_Georgian_tar:number
    export const KEY_Georgian_un:number
    export const KEY_Georgian_vin:number
    export const KEY_Georgian_we:number
    export const KEY_Georgian_xan:number
    export const KEY_Georgian_zen:number
    export const KEY_Georgian_zhar:number
    export const KEY_Go:number
    export const KEY_Greek_ALPHA:number
    export const KEY_Greek_ALPHAaccent:number
    export const KEY_Greek_BETA:number
    export const KEY_Greek_CHI:number
    export const KEY_Greek_DELTA:number
    export const KEY_Greek_EPSILON:number
    export const KEY_Greek_EPSILONaccent:number
    export const KEY_Greek_ETA:number
    export const KEY_Greek_ETAaccent:number
    export const KEY_Greek_GAMMA:number
    export const KEY_Greek_IOTA:number
    export const KEY_Greek_IOTAaccent:number
    export const KEY_Greek_IOTAdiaeresis:number
    export const KEY_Greek_IOTAdieresis:number
    export const KEY_Greek_KAPPA:number
    export const KEY_Greek_LAMBDA:number
    export const KEY_Greek_LAMDA:number
    export const KEY_Greek_MU:number
    export const KEY_Greek_NU:number
    export const KEY_Greek_OMEGA:number
    export const KEY_Greek_OMEGAaccent:number
    export const KEY_Greek_OMICRON:number
    export const KEY_Greek_OMICRONaccent:number
    export const KEY_Greek_PHI:number
    export const KEY_Greek_PI:number
    export const KEY_Greek_PSI:number
    export const KEY_Greek_RHO:number
    export const KEY_Greek_SIGMA:number
    export const KEY_Greek_TAU:number
    export const KEY_Greek_THETA:number
    export const KEY_Greek_UPSILON:number
    export const KEY_Greek_UPSILONaccent:number
    export const KEY_Greek_UPSILONdieresis:number
    export const KEY_Greek_XI:number
    export const KEY_Greek_ZETA:number
    export const KEY_Greek_accentdieresis:number
    export const KEY_Greek_alpha:number
    export const KEY_Greek_alphaaccent:number
    export const KEY_Greek_beta:number
    export const KEY_Greek_chi:number
    export const KEY_Greek_delta:number
    export const KEY_Greek_epsilon:number
    export const KEY_Greek_epsilonaccent:number
    export const KEY_Greek_eta:number
    export const KEY_Greek_etaaccent:number
    export const KEY_Greek_finalsmallsigma:number
    export const KEY_Greek_gamma:number
    export const KEY_Greek_horizbar:number
    export const KEY_Greek_iota:number
    export const KEY_Greek_iotaaccent:number
    export const KEY_Greek_iotaaccentdieresis:number
    export const KEY_Greek_iotadieresis:number
    export const KEY_Greek_kappa:number
    export const KEY_Greek_lambda:number
    export const KEY_Greek_lamda:number
    export const KEY_Greek_mu:number
    export const KEY_Greek_nu:number
    export const KEY_Greek_omega:number
    export const KEY_Greek_omegaaccent:number
    export const KEY_Greek_omicron:number
    export const KEY_Greek_omicronaccent:number
    export const KEY_Greek_phi:number
    export const KEY_Greek_pi:number
    export const KEY_Greek_psi:number
    export const KEY_Greek_rho:number
    export const KEY_Greek_sigma:number
    export const KEY_Greek_switch:number
    export const KEY_Greek_tau:number
    export const KEY_Greek_theta:number
    export const KEY_Greek_upsilon:number
    export const KEY_Greek_upsilonaccent:number
    export const KEY_Greek_upsilonaccentdieresis:number
    export const KEY_Greek_upsilondieresis:number
    export const KEY_Greek_xi:number
    export const KEY_Greek_zeta:number
    export const KEY_Green:number
    export const KEY_H:number
    export const KEY_Hangul:number
    export const KEY_Hangul_A:number
    export const KEY_Hangul_AE:number
    export const KEY_Hangul_AraeA:number
    export const KEY_Hangul_AraeAE:number
    export const KEY_Hangul_Banja:number
    export const KEY_Hangul_Cieuc:number
    export const KEY_Hangul_Codeinput:number
    export const KEY_Hangul_Dikeud:number
    export const KEY_Hangul_E:number
    export const KEY_Hangul_EO:number
    export const KEY_Hangul_EU:number
    export const KEY_Hangul_End:number
    export const KEY_Hangul_Hanja:number
    export const KEY_Hangul_Hieuh:number
    export const KEY_Hangul_I:number
    export const KEY_Hangul_Ieung:number
    export const KEY_Hangul_J_Cieuc:number
    export const KEY_Hangul_J_Dikeud:number
    export const KEY_Hangul_J_Hieuh:number
    export const KEY_Hangul_J_Ieung:number
    export const KEY_Hangul_J_Jieuj:number
    export const KEY_Hangul_J_Khieuq:number
    export const KEY_Hangul_J_Kiyeog:number
    export const KEY_Hangul_J_KiyeogSios:number
    export const KEY_Hangul_J_KkogjiDalrinIeung:number
    export const KEY_Hangul_J_Mieum:number
    export const KEY_Hangul_J_Nieun:number
    export const KEY_Hangul_J_NieunHieuh:number
    export const KEY_Hangul_J_NieunJieuj:number
    export const KEY_Hangul_J_PanSios:number
    export const KEY_Hangul_J_Phieuf:number
    export const KEY_Hangul_J_Pieub:number
    export const KEY_Hangul_J_PieubSios:number
    export const KEY_Hangul_J_Rieul:number
    export const KEY_Hangul_J_RieulHieuh:number
    export const KEY_Hangul_J_RieulKiyeog:number
    export const KEY_Hangul_J_RieulMieum:number
    export const KEY_Hangul_J_RieulPhieuf:number
    export const KEY_Hangul_J_RieulPieub:number
    export const KEY_Hangul_J_RieulSios:number
    export const KEY_Hangul_J_RieulTieut:number
    export const KEY_Hangul_J_Sios:number
    export const KEY_Hangul_J_SsangKiyeog:number
    export const KEY_Hangul_J_SsangSios:number
    export const KEY_Hangul_J_Tieut:number
    export const KEY_Hangul_J_YeorinHieuh:number
    export const KEY_Hangul_Jamo:number
    export const KEY_Hangul_Jeonja:number
    export const KEY_Hangul_Jieuj:number
    export const KEY_Hangul_Khieuq:number
    export const KEY_Hangul_Kiyeog:number
    export const KEY_Hangul_KiyeogSios:number
    export const KEY_Hangul_KkogjiDalrinIeung:number
    export const KEY_Hangul_Mieum:number
    export const KEY_Hangul_MultipleCandidate:number
    export const KEY_Hangul_Nieun:number
    export const KEY_Hangul_NieunHieuh:number
    export const KEY_Hangul_NieunJieuj:number
    export const KEY_Hangul_O:number
    export const KEY_Hangul_OE:number
    export const KEY_Hangul_PanSios:number
    export const KEY_Hangul_Phieuf:number
    export const KEY_Hangul_Pieub:number
    export const KEY_Hangul_PieubSios:number
    export const KEY_Hangul_PostHanja:number
    export const KEY_Hangul_PreHanja:number
    export const KEY_Hangul_PreviousCandidate:number
    export const KEY_Hangul_Rieul:number
    export const KEY_Hangul_RieulHieuh:number
    export const KEY_Hangul_RieulKiyeog:number
    export const KEY_Hangul_RieulMieum:number
    export const KEY_Hangul_RieulPhieuf:number
    export const KEY_Hangul_RieulPieub:number
    export const KEY_Hangul_RieulSios:number
    export const KEY_Hangul_RieulTieut:number
    export const KEY_Hangul_RieulYeorinHieuh:number
    export const KEY_Hangul_Romaja:number
    export const KEY_Hangul_SingleCandidate:number
    export const KEY_Hangul_Sios:number
    export const KEY_Hangul_Special:number
    export const KEY_Hangul_SsangDikeud:number
    export const KEY_Hangul_SsangJieuj:number
    export const KEY_Hangul_SsangKiyeog:number
    export const KEY_Hangul_SsangPieub:number
    export const KEY_Hangul_SsangSios:number
    export const KEY_Hangul_Start:number
    export const KEY_Hangul_SunkyeongeumMieum:number
    export const KEY_Hangul_SunkyeongeumPhieuf:number
    export const KEY_Hangul_SunkyeongeumPieub:number
    export const KEY_Hangul_Tieut:number
    export const KEY_Hangul_U:number
    export const KEY_Hangul_WA:number
    export const KEY_Hangul_WAE:number
    export const KEY_Hangul_WE:number
    export const KEY_Hangul_WEO:number
    export const KEY_Hangul_WI:number
    export const KEY_Hangul_YA:number
    export const KEY_Hangul_YAE:number
    export const KEY_Hangul_YE:number
    export const KEY_Hangul_YEO:number
    export const KEY_Hangul_YI:number
    export const KEY_Hangul_YO:number
    export const KEY_Hangul_YU:number
    export const KEY_Hangul_YeorinHieuh:number
    export const KEY_Hangul_switch:number
    export const KEY_Hankaku:number
    export const KEY_Hcircumflex:number
    export const KEY_Hebrew_switch:number
    export const KEY_Help:number
    export const KEY_Henkan:number
    export const KEY_Henkan_Mode:number
    export const KEY_Hibernate:number
    export const KEY_Hiragana:number
    export const KEY_Hiragana_Katakana:number
    export const KEY_History:number
    export const KEY_Home:number
    export const KEY_HomePage:number
    export const KEY_HotLinks:number
    export const KEY_Hstroke:number
    export const KEY_Hyper_L:number
    export const KEY_Hyper_R:number
    export const KEY_I:number
    export const KEY_ISO_Center_Object:number
    export const KEY_ISO_Continuous_Underline:number
    export const KEY_ISO_Discontinuous_Underline:number
    export const KEY_ISO_Emphasize:number
    export const KEY_ISO_Enter:number
    export const KEY_ISO_Fast_Cursor_Down:number
    export const KEY_ISO_Fast_Cursor_Left:number
    export const KEY_ISO_Fast_Cursor_Right:number
    export const KEY_ISO_Fast_Cursor_Up:number
    export const KEY_ISO_First_Group:number
    export const KEY_ISO_First_Group_Lock:number
    export const KEY_ISO_Group_Latch:number
    export const KEY_ISO_Group_Lock:number
    export const KEY_ISO_Group_Shift:number
    export const KEY_ISO_Last_Group:number
    export const KEY_ISO_Last_Group_Lock:number
    export const KEY_ISO_Left_Tab:number
    export const KEY_ISO_Level2_Latch:number
    export const KEY_ISO_Level3_Latch:number
    export const KEY_ISO_Level3_Lock:number
    export const KEY_ISO_Level3_Shift:number
    export const KEY_ISO_Level5_Latch:number
    export const KEY_ISO_Level5_Lock:number
    export const KEY_ISO_Level5_Shift:number
    export const KEY_ISO_Lock:number
    export const KEY_ISO_Move_Line_Down:number
    export const KEY_ISO_Move_Line_Up:number
    export const KEY_ISO_Next_Group:number
    export const KEY_ISO_Next_Group_Lock:number
    export const KEY_ISO_Partial_Line_Down:number
    export const KEY_ISO_Partial_Line_Up:number
    export const KEY_ISO_Partial_Space_Left:number
    export const KEY_ISO_Partial_Space_Right:number
    export const KEY_ISO_Prev_Group:number
    export const KEY_ISO_Prev_Group_Lock:number
    export const KEY_ISO_Release_Both_Margins:number
    export const KEY_ISO_Release_Margin_Left:number
    export const KEY_ISO_Release_Margin_Right:number
    export const KEY_ISO_Set_Margin_Left:number
    export const KEY_ISO_Set_Margin_Right:number
    export const KEY_Iabovedot:number
    export const KEY_Iacute:number
    export const KEY_Ibelowdot:number
    export const KEY_Ibreve:number
    export const KEY_Icircumflex:number
    export const KEY_Idiaeresis:number
    export const KEY_Igrave:number
    export const KEY_Ihook:number
    export const KEY_Imacron:number
    export const KEY_Insert:number
    export const KEY_Iogonek:number
    export const KEY_Itilde:number
    export const KEY_J:number
    export const KEY_Jcircumflex:number
    export const KEY_K:number
    export const KEY_KP_0:number
    export const KEY_KP_1:number
    export const KEY_KP_2:number
    export const KEY_KP_3:number
    export const KEY_KP_4:number
    export const KEY_KP_5:number
    export const KEY_KP_6:number
    export const KEY_KP_7:number
    export const KEY_KP_8:number
    export const KEY_KP_9:number
    export const KEY_KP_Add:number
    export const KEY_KP_Begin:number
    export const KEY_KP_Decimal:number
    export const KEY_KP_Delete:number
    export const KEY_KP_Divide:number
    export const KEY_KP_Down:number
    export const KEY_KP_End:number
    export const KEY_KP_Enter:number
    export const KEY_KP_Equal:number
    export const KEY_KP_F1:number
    export const KEY_KP_F2:number
    export const KEY_KP_F3:number
    export const KEY_KP_F4:number
    export const KEY_KP_Home:number
    export const KEY_KP_Insert:number
    export const KEY_KP_Left:number
    export const KEY_KP_Multiply:number
    export const KEY_KP_Next:number
    export const KEY_KP_Page_Down:number
    export const KEY_KP_Page_Up:number
    export const KEY_KP_Prior:number
    export const KEY_KP_Right:number
    export const KEY_KP_Separator:number
    export const KEY_KP_Space:number
    export const KEY_KP_Subtract:number
    export const KEY_KP_Tab:number
    export const KEY_KP_Up:number
    export const KEY_Kana_Lock:number
    export const KEY_Kana_Shift:number
    export const KEY_Kanji:number
    export const KEY_Kanji_Bangou:number
    export const KEY_Katakana:number
    export const KEY_KbdBrightnessDown:number
    export const KEY_KbdBrightnessUp:number
    export const KEY_KbdLightOnOff:number
    export const KEY_Kcedilla:number
    export const KEY_Korean_Won:number
    export const KEY_L:number
    export const KEY_L1:number
    export const KEY_L10:number
    export const KEY_L2:number
    export const KEY_L3:number
    export const KEY_L4:number
    export const KEY_L5:number
    export const KEY_L6:number
    export const KEY_L7:number
    export const KEY_L8:number
    export const KEY_L9:number
    export const KEY_Lacute:number
    export const KEY_Last_Virtual_Screen:number
    export const KEY_Launch0:number
    export const KEY_Launch1:number
    export const KEY_Launch2:number
    export const KEY_Launch3:number
    export const KEY_Launch4:number
    export const KEY_Launch5:number
    export const KEY_Launch6:number
    export const KEY_Launch7:number
    export const KEY_Launch8:number
    export const KEY_Launch9:number
    export const KEY_LaunchA:number
    export const KEY_LaunchB:number
    export const KEY_LaunchC:number
    export const KEY_LaunchD:number
    export const KEY_LaunchE:number
    export const KEY_LaunchF:number
    export const KEY_Lbelowdot:number
    export const KEY_Lcaron:number
    export const KEY_Lcedilla:number
    export const KEY_Left:number
    export const KEY_LightBulb:number
    export const KEY_Linefeed:number
    export const KEY_LiraSign:number
    export const KEY_LogGrabInfo:number
    export const KEY_LogOff:number
    export const KEY_LogWindowTree:number
    export const KEY_Lstroke:number
    export const KEY_M:number
    export const KEY_Mabovedot:number
    export const KEY_Macedonia_DSE:number
    export const KEY_Macedonia_GJE:number
    export const KEY_Macedonia_KJE:number
    export const KEY_Macedonia_dse:number
    export const KEY_Macedonia_gje:number
    export const KEY_Macedonia_kje:number
    export const KEY_Mae_Koho:number
    export const KEY_Mail:number
    export const KEY_MailForward:number
    export const KEY_Market:number
    export const KEY_Massyo:number
    export const KEY_Meeting:number
    export const KEY_Memo:number
    export const KEY_Menu:number
    export const KEY_MenuKB:number
    export const KEY_MenuPB:number
    export const KEY_Messenger:number
    export const KEY_Meta_L:number
    export const KEY_Meta_R:number
    export const KEY_MillSign:number
    export const KEY_ModeLock:number
    export const KEY_Mode_switch:number
    export const KEY_MonBrightnessDown:number
    export const KEY_MonBrightnessUp:number
    export const KEY_MouseKeys_Accel_Enable:number
    export const KEY_MouseKeys_Enable:number
    export const KEY_Muhenkan:number
    export const KEY_Multi_key:number
    export const KEY_MultipleCandidate:number
    export const KEY_Music:number
    export const KEY_MyComputer:number
    export const KEY_MySites:number
    export const KEY_N:number
    export const KEY_Nacute:number
    export const KEY_NairaSign:number
    export const KEY_Ncaron:number
    export const KEY_Ncedilla:number
    export const KEY_New:number
    export const KEY_NewSheqelSign:number
    export const KEY_News:number
    export const KEY_Next:number
    export const KEY_Next_VMode:number
    export const KEY_Next_Virtual_Screen:number
    export const KEY_Ntilde:number
    export const KEY_Num_Lock:number
    export const KEY_O:number
    export const KEY_OE:number
    export const KEY_Oacute:number
    export const KEY_Obarred:number
    export const KEY_Obelowdot:number
    export const KEY_Ocaron:number
    export const KEY_Ocircumflex:number
    export const KEY_Ocircumflexacute:number
    export const KEY_Ocircumflexbelowdot:number
    export const KEY_Ocircumflexgrave:number
    export const KEY_Ocircumflexhook:number
    export const KEY_Ocircumflextilde:number
    export const KEY_Odiaeresis:number
    export const KEY_Odoubleacute:number
    export const KEY_OfficeHome:number
    export const KEY_Ograve:number
    export const KEY_Ohook:number
    export const KEY_Ohorn:number
    export const KEY_Ohornacute:number
    export const KEY_Ohornbelowdot:number
    export const KEY_Ohorngrave:number
    export const KEY_Ohornhook:number
    export const KEY_Ohorntilde:number
    export const KEY_Omacron:number
    export const KEY_Ooblique:number
    export const KEY_Open:number
    export const KEY_OpenURL:number
    export const KEY_Option:number
    export const KEY_Oslash:number
    export const KEY_Otilde:number
    export const KEY_Overlay1_Enable:number
    export const KEY_Overlay2_Enable:number
    export const KEY_P:number
    export const KEY_Pabovedot:number
    export const KEY_Page_Down:number
    export const KEY_Page_Up:number
    export const KEY_Paste:number
    export const KEY_Pause:number
    export const KEY_PesetaSign:number
    export const KEY_Phone:number
    export const KEY_Pictures:number
    export const KEY_Pointer_Accelerate:number
    export const KEY_Pointer_Button1:number
    export const KEY_Pointer_Button2:number
    export const KEY_Pointer_Button3:number
    export const KEY_Pointer_Button4:number
    export const KEY_Pointer_Button5:number
    export const KEY_Pointer_Button_Dflt:number
    export const KEY_Pointer_DblClick1:number
    export const KEY_Pointer_DblClick2:number
    export const KEY_Pointer_DblClick3:number
    export const KEY_Pointer_DblClick4:number
    export const KEY_Pointer_DblClick5:number
    export const KEY_Pointer_DblClick_Dflt:number
    export const KEY_Pointer_DfltBtnNext:number
    export const KEY_Pointer_DfltBtnPrev:number
    export const KEY_Pointer_Down:number
    export const KEY_Pointer_DownLeft:number
    export const KEY_Pointer_DownRight:number
    export const KEY_Pointer_Drag1:number
    export const KEY_Pointer_Drag2:number
    export const KEY_Pointer_Drag3:number
    export const KEY_Pointer_Drag4:number
    export const KEY_Pointer_Drag5:number
    export const KEY_Pointer_Drag_Dflt:number
    export const KEY_Pointer_EnableKeys:number
    export const KEY_Pointer_Left:number
    export const KEY_Pointer_Right:number
    export const KEY_Pointer_Up:number
    export const KEY_Pointer_UpLeft:number
    export const KEY_Pointer_UpRight:number
    export const KEY_PowerDown:number
    export const KEY_PowerOff:number
    export const KEY_Prev_VMode:number
    export const KEY_Prev_Virtual_Screen:number
    export const KEY_PreviousCandidate:number
    export const KEY_Print:number
    export const KEY_Prior:number
    export const KEY_Q:number
    export const KEY_R:number
    export const KEY_R1:number
    export const KEY_R10:number
    export const KEY_R11:number
    export const KEY_R12:number
    export const KEY_R13:number
    export const KEY_R14:number
    export const KEY_R15:number
    export const KEY_R2:number
    export const KEY_R3:number
    export const KEY_R4:number
    export const KEY_R5:number
    export const KEY_R6:number
    export const KEY_R7:number
    export const KEY_R8:number
    export const KEY_R9:number
    export const KEY_Racute:number
    export const KEY_Rcaron:number
    export const KEY_Rcedilla:number
    export const KEY_Red:number
    export const KEY_Redo:number
    export const KEY_Refresh:number
    export const KEY_Reload:number
    export const KEY_RepeatKeys_Enable:number
    export const KEY_Reply:number
    export const KEY_Return:number
    export const KEY_Right:number
    export const KEY_RockerDown:number
    export const KEY_RockerEnter:number
    export const KEY_RockerUp:number
    export const KEY_Romaji:number
    export const KEY_RotateWindows:number
    export const KEY_RotationKB:number
    export const KEY_RotationPB:number
    export const KEY_RupeeSign:number
    export const KEY_S:number
    export const KEY_SCHWA:number
    export const KEY_Sabovedot:number
    export const KEY_Sacute:number
    export const KEY_Save:number
    export const KEY_Scaron:number
    export const KEY_Scedilla:number
    export const KEY_Scircumflex:number
    export const KEY_ScreenSaver:number
    export const KEY_ScrollClick:number
    export const KEY_ScrollDown:number
    export const KEY_ScrollUp:number
    export const KEY_Scroll_Lock:number
    export const KEY_Search:number
    export const KEY_Select:number
    export const KEY_SelectButton:number
    export const KEY_Send:number
    export const KEY_Serbian_DJE:number
    export const KEY_Serbian_DZE:number
    export const KEY_Serbian_JE:number
    export const KEY_Serbian_LJE:number
    export const KEY_Serbian_NJE:number
    export const KEY_Serbian_TSHE:number
    export const KEY_Serbian_dje:number
    export const KEY_Serbian_dze:number
    export const KEY_Serbian_je:number
    export const KEY_Serbian_lje:number
    export const KEY_Serbian_nje:number
    export const KEY_Serbian_tshe:number
    export const KEY_Shift_L:number
    export const KEY_Shift_Lock:number
    export const KEY_Shift_R:number
    export const KEY_Shop:number
    export const KEY_SingleCandidate:number
    export const KEY_Sinh_a:number
    export const KEY_Sinh_aa:number
    export const KEY_Sinh_aa2:number
    export const KEY_Sinh_ae:number
    export const KEY_Sinh_ae2:number
    export const KEY_Sinh_aee:number
    export const KEY_Sinh_aee2:number
    export const KEY_Sinh_ai:number
    export const KEY_Sinh_ai2:number
    export const KEY_Sinh_al:number
    export const KEY_Sinh_au:number
    export const KEY_Sinh_au2:number
    export const KEY_Sinh_ba:number
    export const KEY_Sinh_bha:number
    export const KEY_Sinh_ca:number
    export const KEY_Sinh_cha:number
    export const KEY_Sinh_dda:number
    export const KEY_Sinh_ddha:number
    export const KEY_Sinh_dha:number
    export const KEY_Sinh_dhha:number
    export const KEY_Sinh_e:number
    export const KEY_Sinh_e2:number
    export const KEY_Sinh_ee:number
    export const KEY_Sinh_ee2:number
    export const KEY_Sinh_fa:number
    export const KEY_Sinh_ga:number
    export const KEY_Sinh_gha:number
    export const KEY_Sinh_h2:number
    export const KEY_Sinh_ha:number
    export const KEY_Sinh_i:number
    export const KEY_Sinh_i2:number
    export const KEY_Sinh_ii:number
    export const KEY_Sinh_ii2:number
    export const KEY_Sinh_ja:number
    export const KEY_Sinh_jha:number
    export const KEY_Sinh_jnya:number
    export const KEY_Sinh_ka:number
    export const KEY_Sinh_kha:number
    export const KEY_Sinh_kunddaliya:number
    export const KEY_Sinh_la:number
    export const KEY_Sinh_lla:number
    export const KEY_Sinh_lu:number
    export const KEY_Sinh_lu2:number
    export const KEY_Sinh_luu:number
    export const KEY_Sinh_luu2:number
    export const KEY_Sinh_ma:number
    export const KEY_Sinh_mba:number
    export const KEY_Sinh_na:number
    export const KEY_Sinh_ndda:number
    export const KEY_Sinh_ndha:number
    export const KEY_Sinh_ng:number
    export const KEY_Sinh_ng2:number
    export const KEY_Sinh_nga:number
    export const KEY_Sinh_nja:number
    export const KEY_Sinh_nna:number
    export const KEY_Sinh_nya:number
    export const KEY_Sinh_o:number
    export const KEY_Sinh_o2:number
    export const KEY_Sinh_oo:number
    export const KEY_Sinh_oo2:number
    export const KEY_Sinh_pa:number
    export const KEY_Sinh_pha:number
    export const KEY_Sinh_ra:number
    export const KEY_Sinh_ri:number
    export const KEY_Sinh_rii:number
    export const KEY_Sinh_ru2:number
    export const KEY_Sinh_ruu2:number
    export const KEY_Sinh_sa:number
    export const KEY_Sinh_sha:number
    export const KEY_Sinh_ssha:number
    export const KEY_Sinh_tha:number
    export const KEY_Sinh_thha:number
    export const KEY_Sinh_tta:number
    export const KEY_Sinh_ttha:number
    export const KEY_Sinh_u:number
    export const KEY_Sinh_u2:number
    export const KEY_Sinh_uu:number
    export const KEY_Sinh_uu2:number
    export const KEY_Sinh_va:number
    export const KEY_Sinh_ya:number
    export const KEY_Sleep:number
    export const KEY_SlowKeys_Enable:number
    export const KEY_Spell:number
    export const KEY_SplitScreen:number
    export const KEY_Standby:number
    export const KEY_Start:number
    export const KEY_StickyKeys_Enable:number
    export const KEY_Stop:number
    export const KEY_Subtitle:number
    export const KEY_Super_L:number
    export const KEY_Super_R:number
    export const KEY_Support:number
    export const KEY_Suspend:number
    export const KEY_Switch_VT_1:number
    export const KEY_Switch_VT_10:number
    export const KEY_Switch_VT_11:number
    export const KEY_Switch_VT_12:number
    export const KEY_Switch_VT_2:number
    export const KEY_Switch_VT_3:number
    export const KEY_Switch_VT_4:number
    export const KEY_Switch_VT_5:number
    export const KEY_Switch_VT_6:number
    export const KEY_Switch_VT_7:number
    export const KEY_Switch_VT_8:number
    export const KEY_Switch_VT_9:number
    export const KEY_Sys_Req:number
    export const KEY_T:number
    export const KEY_THORN:number
    export const KEY_Tab:number
    export const KEY_Tabovedot:number
    export const KEY_TaskPane:number
    export const KEY_Tcaron:number
    export const KEY_Tcedilla:number
    export const KEY_Terminal:number
    export const KEY_Terminate_Server:number
    export const KEY_Thai_baht:number
    export const KEY_Thai_bobaimai:number
    export const KEY_Thai_chochan:number
    export const KEY_Thai_chochang:number
    export const KEY_Thai_choching:number
    export const KEY_Thai_chochoe:number
    export const KEY_Thai_dochada:number
    export const KEY_Thai_dodek:number
    export const KEY_Thai_fofa:number
    export const KEY_Thai_fofan:number
    export const KEY_Thai_hohip:number
    export const KEY_Thai_honokhuk:number
    export const KEY_Thai_khokhai:number
    export const KEY_Thai_khokhon:number
    export const KEY_Thai_khokhuat:number
    export const KEY_Thai_khokhwai:number
    export const KEY_Thai_khorakhang:number
    export const KEY_Thai_kokai:number
    export const KEY_Thai_lakkhangyao:number
    export const KEY_Thai_lekchet:number
    export const KEY_Thai_lekha:number
    export const KEY_Thai_lekhok:number
    export const KEY_Thai_lekkao:number
    export const KEY_Thai_leknung:number
    export const KEY_Thai_lekpaet:number
    export const KEY_Thai_leksam:number
    export const KEY_Thai_leksi:number
    export const KEY_Thai_leksong:number
    export const KEY_Thai_leksun:number
    export const KEY_Thai_lochula:number
    export const KEY_Thai_loling:number
    export const KEY_Thai_lu:number
    export const KEY_Thai_maichattawa:number
    export const KEY_Thai_maiek:number
    export const KEY_Thai_maihanakat:number
    export const KEY_Thai_maihanakat_maitho:number
    export const KEY_Thai_maitaikhu:number
    export const KEY_Thai_maitho:number
    export const KEY_Thai_maitri:number
    export const KEY_Thai_maiyamok:number
    export const KEY_Thai_moma:number
    export const KEY_Thai_ngongu:number
    export const KEY_Thai_nikhahit:number
    export const KEY_Thai_nonen:number
    export const KEY_Thai_nonu:number
    export const KEY_Thai_oang:number
    export const KEY_Thai_paiyannoi:number
    export const KEY_Thai_phinthu:number
    export const KEY_Thai_phophan:number
    export const KEY_Thai_phophung:number
    export const KEY_Thai_phosamphao:number
    export const KEY_Thai_popla:number
    export const KEY_Thai_rorua:number
    export const KEY_Thai_ru:number
    export const KEY_Thai_saraa:number
    export const KEY_Thai_saraaa:number
    export const KEY_Thai_saraae:number
    export const KEY_Thai_saraaimaimalai:number
    export const KEY_Thai_saraaimaimuan:number
    export const KEY_Thai_saraam:number
    export const KEY_Thai_sarae:number
    export const KEY_Thai_sarai:number
    export const KEY_Thai_saraii:number
    export const KEY_Thai_sarao:number
    export const KEY_Thai_sarau:number
    export const KEY_Thai_saraue:number
    export const KEY_Thai_sarauee:number
    export const KEY_Thai_sarauu:number
    export const KEY_Thai_sorusi:number
    export const KEY_Thai_sosala:number
    export const KEY_Thai_soso:number
    export const KEY_Thai_sosua:number
    export const KEY_Thai_thanthakhat:number
    export const KEY_Thai_thonangmontho:number
    export const KEY_Thai_thophuthao:number
    export const KEY_Thai_thothahan:number
    export const KEY_Thai_thothan:number
    export const KEY_Thai_thothong:number
    export const KEY_Thai_thothung:number
    export const KEY_Thai_topatak:number
    export const KEY_Thai_totao:number
    export const KEY_Thai_wowaen:number
    export const KEY_Thai_yoyak:number
    export const KEY_Thai_yoying:number
    export const KEY_Thorn:number
    export const KEY_Time:number
    export const KEY_ToDoList:number
    export const KEY_Tools:number
    export const KEY_TopMenu:number
    export const KEY_TouchpadOff:number
    export const KEY_TouchpadOn:number
    export const KEY_TouchpadToggle:number
    export const KEY_Touroku:number
    export const KEY_Travel:number
    export const KEY_Tslash:number
    export const KEY_U:number
    export const KEY_UWB:number
    export const KEY_Uacute:number
    export const KEY_Ubelowdot:number
    export const KEY_Ubreve:number
    export const KEY_Ucircumflex:number
    export const KEY_Udiaeresis:number
    export const KEY_Udoubleacute:number
    export const KEY_Ugrave:number
    export const KEY_Uhook:number
    export const KEY_Uhorn:number
    export const KEY_Uhornacute:number
    export const KEY_Uhornbelowdot:number
    export const KEY_Uhorngrave:number
    export const KEY_Uhornhook:number
    export const KEY_Uhorntilde:number
    export const KEY_Ukrainian_GHE_WITH_UPTURN:number
    export const KEY_Ukrainian_I:number
    export const KEY_Ukrainian_IE:number
    export const KEY_Ukrainian_YI:number
    export const KEY_Ukrainian_ghe_with_upturn:number
    export const KEY_Ukrainian_i:number
    export const KEY_Ukrainian_ie:number
    export const KEY_Ukrainian_yi:number
    export const KEY_Ukranian_I:number
    export const KEY_Ukranian_JE:number
    export const KEY_Ukranian_YI:number
    export const KEY_Ukranian_i:number
    export const KEY_Ukranian_je:number
    export const KEY_Ukranian_yi:number
    export const KEY_Umacron:number
    export const KEY_Undo:number
    export const KEY_Ungrab:number
    export const KEY_Uogonek:number
    export const KEY_Up:number
    export const KEY_Uring:number
    export const KEY_User1KB:number
    export const KEY_User2KB:number
    export const KEY_UserPB:number
    export const KEY_Utilde:number
    export const KEY_V:number
    export const KEY_VendorHome:number
    export const KEY_Video:number
    export const KEY_View:number
    export const KEY_VoidSymbol:number
    export const KEY_W:number
    export const KEY_WLAN:number
    export const KEY_WWW:number
    export const KEY_Wacute:number
    export const KEY_WakeUp:number
    export const KEY_Wcircumflex:number
    export const KEY_Wdiaeresis:number
    export const KEY_WebCam:number
    export const KEY_Wgrave:number
    export const KEY_WheelButton:number
    export const KEY_WindowClear:number
    export const KEY_WonSign:number
    export const KEY_Word:number
    export const KEY_X:number
    export const KEY_Xabovedot:number
    export const KEY_Xfer:number
    export const KEY_Y:number
    export const KEY_Yacute:number
    export const KEY_Ybelowdot:number
    export const KEY_Ycircumflex:number
    export const KEY_Ydiaeresis:number
    export const KEY_Yellow:number
    export const KEY_Ygrave:number
    export const KEY_Yhook:number
    export const KEY_Ytilde:number
    export const KEY_Z:number
    export const KEY_Zabovedot:number
    export const KEY_Zacute:number
    export const KEY_Zcaron:number
    export const KEY_Zen_Koho:number
    export const KEY_Zenkaku:number
    export const KEY_Zenkaku_Hankaku:number
    export const KEY_ZoomIn:number
    export const KEY_ZoomOut:number
    export const KEY_Zstroke:number
    export const KEY_a:number
    export const KEY_aacute:number
    export const KEY_abelowdot:number
    export const KEY_abovedot:number
    export const KEY_abreve:number
    export const KEY_abreveacute:number
    export const KEY_abrevebelowdot:number
    export const KEY_abrevegrave:number
    export const KEY_abrevehook:number
    export const KEY_abrevetilde:number
    export const KEY_acircumflex:number
    export const KEY_acircumflexacute:number
    export const KEY_acircumflexbelowdot:number
    export const KEY_acircumflexgrave:number
    export const KEY_acircumflexhook:number
    export const KEY_acircumflextilde:number
    export const KEY_acute:number
    export const KEY_adiaeresis:number
    export const KEY_ae:number
    export const KEY_agrave:number
    export const KEY_ahook:number
    export const KEY_amacron:number
    export const KEY_ampersand:number
    export const KEY_aogonek:number
    export const KEY_apostrophe:number
    export const KEY_approxeq:number
    export const KEY_approximate:number
    export const KEY_aring:number
    export const KEY_asciicircum:number
    export const KEY_asciitilde:number
    export const KEY_asterisk:number
    export const KEY_at:number
    export const KEY_atilde:number
    export const KEY_b:number
    export const KEY_babovedot:number
    export const KEY_backslash:number
    export const KEY_ballotcross:number
    export const KEY_bar:number
    export const KEY_because:number
    export const KEY_blank:number
    export const KEY_botintegral:number
    export const KEY_botleftparens:number
    export const KEY_botleftsqbracket:number
    export const KEY_botleftsummation:number
    export const KEY_botrightparens:number
    export const KEY_botrightsqbracket:number
    export const KEY_botrightsummation:number
    export const KEY_bott:number
    export const KEY_botvertsummationconnector:number
    export const KEY_braceleft:number
    export const KEY_braceright:number
    export const KEY_bracketleft:number
    export const KEY_bracketright:number
    export const KEY_braille_blank:number
    export const KEY_braille_dot_1:number
    export const KEY_braille_dot_10:number
    export const KEY_braille_dot_2:number
    export const KEY_braille_dot_3:number
    export const KEY_braille_dot_4:number
    export const KEY_braille_dot_5:number
    export const KEY_braille_dot_6:number
    export const KEY_braille_dot_7:number
    export const KEY_braille_dot_8:number
    export const KEY_braille_dot_9:number
    export const KEY_braille_dots_1:number
    export const KEY_braille_dots_12:number
    export const KEY_braille_dots_123:number
    export const KEY_braille_dots_1234:number
    export const KEY_braille_dots_12345:number
    export const KEY_braille_dots_123456:number
    export const KEY_braille_dots_1234567:number
    export const KEY_braille_dots_12345678:number
    export const KEY_braille_dots_1234568:number
    export const KEY_braille_dots_123457:number
    export const KEY_braille_dots_1234578:number
    export const KEY_braille_dots_123458:number
    export const KEY_braille_dots_12346:number
    export const KEY_braille_dots_123467:number
    export const KEY_braille_dots_1234678:number
    export const KEY_braille_dots_123468:number
    export const KEY_braille_dots_12347:number
    export const KEY_braille_dots_123478:number
    export const KEY_braille_dots_12348:number
    export const KEY_braille_dots_1235:number
    export const KEY_braille_dots_12356:number
    export const KEY_braille_dots_123567:number
    export const KEY_braille_dots_1235678:number
    export const KEY_braille_dots_123568:number
    export const KEY_braille_dots_12357:number
    export const KEY_braille_dots_123578:number
    export const KEY_braille_dots_12358:number
    export const KEY_braille_dots_1236:number
    export const KEY_braille_dots_12367:number
    export const KEY_braille_dots_123678:number
    export const KEY_braille_dots_12368:number
    export const KEY_braille_dots_1237:number
    export const KEY_braille_dots_12378:number
    export const KEY_braille_dots_1238:number
    export const KEY_braille_dots_124:number
    export const KEY_braille_dots_1245:number
    export const KEY_braille_dots_12456:number
    export const KEY_braille_dots_124567:number
    export const KEY_braille_dots_1245678:number
    export const KEY_braille_dots_124568:number
    export const KEY_braille_dots_12457:number
    export const KEY_braille_dots_124578:number
    export const KEY_braille_dots_12458:number
    export const KEY_braille_dots_1246:number
    export const KEY_braille_dots_12467:number
    export const KEY_braille_dots_124678:number
    export const KEY_braille_dots_12468:number
    export const KEY_braille_dots_1247:number
    export const KEY_braille_dots_12478:number
    export const KEY_braille_dots_1248:number
    export const KEY_braille_dots_125:number
    export const KEY_braille_dots_1256:number
    export const KEY_braille_dots_12567:number
    export const KEY_braille_dots_125678:number
    export const KEY_braille_dots_12568:number
    export const KEY_braille_dots_1257:number
    export const KEY_braille_dots_12578:number
    export const KEY_braille_dots_1258:number
    export const KEY_braille_dots_126:number
    export const KEY_braille_dots_1267:number
    export const KEY_braille_dots_12678:number
    export const KEY_braille_dots_1268:number
    export const KEY_braille_dots_127:number
    export const KEY_braille_dots_1278:number
    export const KEY_braille_dots_128:number
    export const KEY_braille_dots_13:number
    export const KEY_braille_dots_134:number
    export const KEY_braille_dots_1345:number
    export const KEY_braille_dots_13456:number
    export const KEY_braille_dots_134567:number
    export const KEY_braille_dots_1345678:number
    export const KEY_braille_dots_134568:number
    export const KEY_braille_dots_13457:number
    export const KEY_braille_dots_134578:number
    export const KEY_braille_dots_13458:number
    export const KEY_braille_dots_1346:number
    export const KEY_braille_dots_13467:number
    export const KEY_braille_dots_134678:number
    export const KEY_braille_dots_13468:number
    export const KEY_braille_dots_1347:number
    export const KEY_braille_dots_13478:number
    export const KEY_braille_dots_1348:number
    export const KEY_braille_dots_135:number
    export const KEY_braille_dots_1356:number
    export const KEY_braille_dots_13567:number
    export const KEY_braille_dots_135678:number
    export const KEY_braille_dots_13568:number
    export const KEY_braille_dots_1357:number
    export const KEY_braille_dots_13578:number
    export const KEY_braille_dots_1358:number
    export const KEY_braille_dots_136:number
    export const KEY_braille_dots_1367:number
    export const KEY_braille_dots_13678:number
    export const KEY_braille_dots_1368:number
    export const KEY_braille_dots_137:number
    export const KEY_braille_dots_1378:number
    export const KEY_braille_dots_138:number
    export const KEY_braille_dots_14:number
    export const KEY_braille_dots_145:number
    export const KEY_braille_dots_1456:number
    export const KEY_braille_dots_14567:number
    export const KEY_braille_dots_145678:number
    export const KEY_braille_dots_14568:number
    export const KEY_braille_dots_1457:number
    export const KEY_braille_dots_14578:number
    export const KEY_braille_dots_1458:number
    export const KEY_braille_dots_146:number
    export const KEY_braille_dots_1467:number
    export const KEY_braille_dots_14678:number
    export const KEY_braille_dots_1468:number
    export const KEY_braille_dots_147:number
    export const KEY_braille_dots_1478:number
    export const KEY_braille_dots_148:number
    export const KEY_braille_dots_15:number
    export const KEY_braille_dots_156:number
    export const KEY_braille_dots_1567:number
    export const KEY_braille_dots_15678:number
    export const KEY_braille_dots_1568:number
    export const KEY_braille_dots_157:number
    export const KEY_braille_dots_1578:number
    export const KEY_braille_dots_158:number
    export const KEY_braille_dots_16:number
    export const KEY_braille_dots_167:number
    export const KEY_braille_dots_1678:number
    export const KEY_braille_dots_168:number
    export const KEY_braille_dots_17:number
    export const KEY_braille_dots_178:number
    export const KEY_braille_dots_18:number
    export const KEY_braille_dots_2:number
    export const KEY_braille_dots_23:number
    export const KEY_braille_dots_234:number
    export const KEY_braille_dots_2345:number
    export const KEY_braille_dots_23456:number
    export const KEY_braille_dots_234567:number
    export const KEY_braille_dots_2345678:number
    export const KEY_braille_dots_234568:number
    export const KEY_braille_dots_23457:number
    export const KEY_braille_dots_234578:number
    export const KEY_braille_dots_23458:number
    export const KEY_braille_dots_2346:number
    export const KEY_braille_dots_23467:number
    export const KEY_braille_dots_234678:number
    export const KEY_braille_dots_23468:number
    export const KEY_braille_dots_2347:number
    export const KEY_braille_dots_23478:number
    export const KEY_braille_dots_2348:number
    export const KEY_braille_dots_235:number
    export const KEY_braille_dots_2356:number
    export const KEY_braille_dots_23567:number
    export const KEY_braille_dots_235678:number
    export const KEY_braille_dots_23568:number
    export const KEY_braille_dots_2357:number
    export const KEY_braille_dots_23578:number
    export const KEY_braille_dots_2358:number
    export const KEY_braille_dots_236:number
    export const KEY_braille_dots_2367:number
    export const KEY_braille_dots_23678:number
    export const KEY_braille_dots_2368:number
    export const KEY_braille_dots_237:number
    export const KEY_braille_dots_2378:number
    export const KEY_braille_dots_238:number
    export const KEY_braille_dots_24:number
    export const KEY_braille_dots_245:number
    export const KEY_braille_dots_2456:number
    export const KEY_braille_dots_24567:number
    export const KEY_braille_dots_245678:number
    export const KEY_braille_dots_24568:number
    export const KEY_braille_dots_2457:number
    export const KEY_braille_dots_24578:number
    export const KEY_braille_dots_2458:number
    export const KEY_braille_dots_246:number
    export const KEY_braille_dots_2467:number
    export const KEY_braille_dots_24678:number
    export const KEY_braille_dots_2468:number
    export const KEY_braille_dots_247:number
    export const KEY_braille_dots_2478:number
    export const KEY_braille_dots_248:number
    export const KEY_braille_dots_25:number
    export const KEY_braille_dots_256:number
    export const KEY_braille_dots_2567:number
    export const KEY_braille_dots_25678:number
    export const KEY_braille_dots_2568:number
    export const KEY_braille_dots_257:number
    export const KEY_braille_dots_2578:number
    export const KEY_braille_dots_258:number
    export const KEY_braille_dots_26:number
    export const KEY_braille_dots_267:number
    export const KEY_braille_dots_2678:number
    export const KEY_braille_dots_268:number
    export const KEY_braille_dots_27:number
    export const KEY_braille_dots_278:number
    export const KEY_braille_dots_28:number
    export const KEY_braille_dots_3:number
    export const KEY_braille_dots_34:number
    export const KEY_braille_dots_345:number
    export const KEY_braille_dots_3456:number
    export const KEY_braille_dots_34567:number
    export const KEY_braille_dots_345678:number
    export const KEY_braille_dots_34568:number
    export const KEY_braille_dots_3457:number
    export const KEY_braille_dots_34578:number
    export const KEY_braille_dots_3458:number
    export const KEY_braille_dots_346:number
    export const KEY_braille_dots_3467:number
    export const KEY_braille_dots_34678:number
    export const KEY_braille_dots_3468:number
    export const KEY_braille_dots_347:number
    export const KEY_braille_dots_3478:number
    export const KEY_braille_dots_348:number
    export const KEY_braille_dots_35:number
    export const KEY_braille_dots_356:number
    export const KEY_braille_dots_3567:number
    export const KEY_braille_dots_35678:number
    export const KEY_braille_dots_3568:number
    export const KEY_braille_dots_357:number
    export const KEY_braille_dots_3578:number
    export const KEY_braille_dots_358:number
    export const KEY_braille_dots_36:number
    export const KEY_braille_dots_367:number
    export const KEY_braille_dots_3678:number
    export const KEY_braille_dots_368:number
    export const KEY_braille_dots_37:number
    export const KEY_braille_dots_378:number
    export const KEY_braille_dots_38:number
    export const KEY_braille_dots_4:number
    export const KEY_braille_dots_45:number
    export const KEY_braille_dots_456:number
    export const KEY_braille_dots_4567:number
    export const KEY_braille_dots_45678:number
    export const KEY_braille_dots_4568:number
    export const KEY_braille_dots_457:number
    export const KEY_braille_dots_4578:number
    export const KEY_braille_dots_458:number
    export const KEY_braille_dots_46:number
    export const KEY_braille_dots_467:number
    export const KEY_braille_dots_4678:number
    export const KEY_braille_dots_468:number
    export const KEY_braille_dots_47:number
    export const KEY_braille_dots_478:number
    export const KEY_braille_dots_48:number
    export const KEY_braille_dots_5:number
    export const KEY_braille_dots_56:number
    export const KEY_braille_dots_567:number
    export const KEY_braille_dots_5678:number
    export const KEY_braille_dots_568:number
    export const KEY_braille_dots_57:number
    export const KEY_braille_dots_578:number
    export const KEY_braille_dots_58:number
    export const KEY_braille_dots_6:number
    export const KEY_braille_dots_67:number
    export const KEY_braille_dots_678:number
    export const KEY_braille_dots_68:number
    export const KEY_braille_dots_7:number
    export const KEY_braille_dots_78:number
    export const KEY_braille_dots_8:number
    export const KEY_breve:number
    export const KEY_brokenbar:number
    export const KEY_c:number
    export const KEY_c_h:number
    export const KEY_cabovedot:number
    export const KEY_cacute:number
    export const KEY_careof:number
    export const KEY_caret:number
    export const KEY_caron:number
    export const KEY_ccaron:number
    export const KEY_ccedilla:number
    export const KEY_ccircumflex:number
    export const KEY_cedilla:number
    export const KEY_cent:number
    export const KEY_ch:number
    export const KEY_checkerboard:number
    export const KEY_checkmark:number
    export const KEY_circle:number
    export const KEY_club:number
    export const KEY_colon:number
    export const KEY_comma:number
    export const KEY_containsas:number
    export const KEY_copyright:number
    export const KEY_cr:number
    export const KEY_crossinglines:number
    export const KEY_cuberoot:number
    export const KEY_currency:number
    export const KEY_cursor:number
    export const KEY_d:number
    export const KEY_dabovedot:number
    export const KEY_dagger:number
    export const KEY_dcaron:number
    export const KEY_dead_A:number
    export const KEY_dead_E:number
    export const KEY_dead_I:number
    export const KEY_dead_O:number
    export const KEY_dead_U:number
    export const KEY_dead_a:number
    export const KEY_dead_abovecomma:number
    export const KEY_dead_abovedot:number
    export const KEY_dead_abovereversedcomma:number
    export const KEY_dead_abovering:number
    export const KEY_dead_acute:number
    export const KEY_dead_belowbreve:number
    export const KEY_dead_belowcircumflex:number
    export const KEY_dead_belowcomma:number
    export const KEY_dead_belowdiaeresis:number
    export const KEY_dead_belowdot:number
    export const KEY_dead_belowmacron:number
    export const KEY_dead_belowring:number
    export const KEY_dead_belowtilde:number
    export const KEY_dead_breve:number
    export const KEY_dead_capital_schwa:number
    export const KEY_dead_caron:number
    export const KEY_dead_cedilla:number
    export const KEY_dead_circumflex:number
    export const KEY_dead_currency:number
    export const KEY_dead_dasia:number
    export const KEY_dead_diaeresis:number
    export const KEY_dead_doubleacute:number
    export const KEY_dead_doublegrave:number
    export const KEY_dead_e:number
    export const KEY_dead_grave:number
    export const KEY_dead_greek:number
    export const KEY_dead_hook:number
    export const KEY_dead_horn:number
    export const KEY_dead_i:number
    export const KEY_dead_invertedbreve:number
    export const KEY_dead_iota:number
    export const KEY_dead_macron:number
    export const KEY_dead_o:number
    export const KEY_dead_ogonek:number
    export const KEY_dead_perispomeni:number
    export const KEY_dead_psili:number
    export const KEY_dead_semivoiced_sound:number
    export const KEY_dead_small_schwa:number
    export const KEY_dead_stroke:number
    export const KEY_dead_tilde:number
    export const KEY_dead_u:number
    export const KEY_dead_voiced_sound:number
    export const KEY_decimalpoint:number
    export const KEY_degree:number
    export const KEY_diaeresis:number
    export const KEY_diamond:number
    export const KEY_digitspace:number
    export const KEY_dintegral:number
    export const KEY_division:number
    export const KEY_dollar:number
    export const KEY_doubbaselinedot:number
    export const KEY_doubleacute:number
    export const KEY_doubledagger:number
    export const KEY_doublelowquotemark:number
    export const KEY_downarrow:number
    export const KEY_downcaret:number
    export const KEY_downshoe:number
    export const KEY_downstile:number
    export const KEY_downtack:number
    export const KEY_dstroke:number
    export const KEY_e:number
    export const KEY_eabovedot:number
    export const KEY_eacute:number
    export const KEY_ebelowdot:number
    export const KEY_ecaron:number
    export const KEY_ecircumflex:number
    export const KEY_ecircumflexacute:number
    export const KEY_ecircumflexbelowdot:number
    export const KEY_ecircumflexgrave:number
    export const KEY_ecircumflexhook:number
    export const KEY_ecircumflextilde:number
    export const KEY_ediaeresis:number
    export const KEY_egrave:number
    export const KEY_ehook:number
    export const KEY_eightsubscript:number
    export const KEY_eightsuperior:number
    export const KEY_elementof:number
    export const KEY_ellipsis:number
    export const KEY_em3space:number
    export const KEY_em4space:number
    export const KEY_emacron:number
    export const KEY_emdash:number
    export const KEY_emfilledcircle:number
    export const KEY_emfilledrect:number
    export const KEY_emopencircle:number
    export const KEY_emopenrectangle:number
    export const KEY_emptyset:number
    export const KEY_emspace:number
    export const KEY_endash:number
    export const KEY_enfilledcircbullet:number
    export const KEY_enfilledsqbullet:number
    export const KEY_eng:number
    export const KEY_enopencircbullet:number
    export const KEY_enopensquarebullet:number
    export const KEY_enspace:number
    export const KEY_eogonek:number
    export const KEY_equal:number
    export const KEY_eth:number
    export const KEY_etilde:number
    export const KEY_exclam:number
    export const KEY_exclamdown:number
    export const KEY_ezh:number
    export const KEY_f:number
    export const KEY_fabovedot:number
    export const KEY_femalesymbol:number
    export const KEY_ff:number
    export const KEY_figdash:number
    export const KEY_filledlefttribullet:number
    export const KEY_filledrectbullet:number
    export const KEY_filledrighttribullet:number
    export const KEY_filledtribulletdown:number
    export const KEY_filledtribulletup:number
    export const KEY_fiveeighths:number
    export const KEY_fivesixths:number
    export const KEY_fivesubscript:number
    export const KEY_fivesuperior:number
    export const KEY_fourfifths:number
    export const KEY_foursubscript:number
    export const KEY_foursuperior:number
    export const KEY_fourthroot:number
    export const KEY_function:number
    export const KEY_g:number
    export const KEY_gabovedot:number
    export const KEY_gbreve:number
    export const KEY_gcaron:number
    export const KEY_gcedilla:number
    export const KEY_gcircumflex:number
    export const KEY_grave:number
    export const KEY_greater:number
    export const KEY_greaterthanequal:number
    export const KEY_guillemotleft:number
    export const KEY_guillemotright:number
    export const KEY_h:number
    export const KEY_hairspace:number
    export const KEY_hcircumflex:number
    export const KEY_heart:number
    export const KEY_hebrew_aleph:number
    export const KEY_hebrew_ayin:number
    export const KEY_hebrew_bet:number
    export const KEY_hebrew_beth:number
    export const KEY_hebrew_chet:number
    export const KEY_hebrew_dalet:number
    export const KEY_hebrew_daleth:number
    export const KEY_hebrew_doublelowline:number
    export const KEY_hebrew_finalkaph:number
    export const KEY_hebrew_finalmem:number
    export const KEY_hebrew_finalnun:number
    export const KEY_hebrew_finalpe:number
    export const KEY_hebrew_finalzade:number
    export const KEY_hebrew_finalzadi:number
    export const KEY_hebrew_gimel:number
    export const KEY_hebrew_gimmel:number
    export const KEY_hebrew_he:number
    export const KEY_hebrew_het:number
    export const KEY_hebrew_kaph:number
    export const KEY_hebrew_kuf:number
    export const KEY_hebrew_lamed:number
    export const KEY_hebrew_mem:number
    export const KEY_hebrew_nun:number
    export const KEY_hebrew_pe:number
    export const KEY_hebrew_qoph:number
    export const KEY_hebrew_resh:number
    export const KEY_hebrew_samech:number
    export const KEY_hebrew_samekh:number
    export const KEY_hebrew_shin:number
    export const KEY_hebrew_taf:number
    export const KEY_hebrew_taw:number
    export const KEY_hebrew_tet:number
    export const KEY_hebrew_teth:number
    export const KEY_hebrew_waw:number
    export const KEY_hebrew_yod:number
    export const KEY_hebrew_zade:number
    export const KEY_hebrew_zadi:number
    export const KEY_hebrew_zain:number
    export const KEY_hebrew_zayin:number
    export const KEY_hexagram:number
    export const KEY_horizconnector:number
    export const KEY_horizlinescan1:number
    export const KEY_horizlinescan3:number
    export const KEY_horizlinescan5:number
    export const KEY_horizlinescan7:number
    export const KEY_horizlinescan9:number
    export const KEY_hstroke:number
    export const KEY_ht:number
    export const KEY_hyphen:number
    export const KEY_i:number
    export const KEY_iTouch:number
    export const KEY_iacute:number
    export const KEY_ibelowdot:number
    export const KEY_ibreve:number
    export const KEY_icircumflex:number
    export const KEY_identical:number
    export const KEY_idiaeresis:number
    export const KEY_idotless:number
    export const KEY_ifonlyif:number
    export const KEY_igrave:number
    export const KEY_ihook:number
    export const KEY_imacron:number
    export const KEY_implies:number
    export const KEY_includedin:number
    export const KEY_includes:number
    export const KEY_infinity:number
    export const KEY_integral:number
    export const KEY_intersection:number
    export const KEY_iogonek:number
    export const KEY_itilde:number
    export const KEY_j:number
    export const KEY_jcircumflex:number
    export const KEY_jot:number
    export const KEY_k:number
    export const KEY_kana_A:number
    export const KEY_kana_CHI:number
    export const KEY_kana_E:number
    export const KEY_kana_FU:number
    export const KEY_kana_HA:number
    export const KEY_kana_HE:number
    export const KEY_kana_HI:number
    export const KEY_kana_HO:number
    export const KEY_kana_HU:number
    export const KEY_kana_I:number
    export const KEY_kana_KA:number
    export const KEY_kana_KE:number
    export const KEY_kana_KI:number
    export const KEY_kana_KO:number
    export const KEY_kana_KU:number
    export const KEY_kana_MA:number
    export const KEY_kana_ME:number
    export const KEY_kana_MI:number
    export const KEY_kana_MO:number
    export const KEY_kana_MU:number
    export const KEY_kana_N:number
    export const KEY_kana_NA:number
    export const KEY_kana_NE:number
    export const KEY_kana_NI:number
    export const KEY_kana_NO:number
    export const KEY_kana_NU:number
    export const KEY_kana_O:number
    export const KEY_kana_RA:number
    export const KEY_kana_RE:number
    export const KEY_kana_RI:number
    export const KEY_kana_RO:number
    export const KEY_kana_RU:number
    export const KEY_kana_SA:number
    export const KEY_kana_SE:number
    export const KEY_kana_SHI:number
    export const KEY_kana_SO:number
    export const KEY_kana_SU:number
    export const KEY_kana_TA:number
    export const KEY_kana_TE:number
    export const KEY_kana_TI:number
    export const KEY_kana_TO:number
    export const KEY_kana_TSU:number
    export const KEY_kana_TU:number
    export const KEY_kana_U:number
    export const KEY_kana_WA:number
    export const KEY_kana_WO:number
    export const KEY_kana_YA:number
    export const KEY_kana_YO:number
    export const KEY_kana_YU:number
    export const KEY_kana_a:number
    export const KEY_kana_closingbracket:number
    export const KEY_kana_comma:number
    export const KEY_kana_conjunctive:number
    export const KEY_kana_e:number
    export const KEY_kana_fullstop:number
    export const KEY_kana_i:number
    export const KEY_kana_middledot:number
    export const KEY_kana_o:number
    export const KEY_kana_openingbracket:number
    export const KEY_kana_switch:number
    export const KEY_kana_tsu:number
    export const KEY_kana_tu:number
    export const KEY_kana_u:number
    export const KEY_kana_ya:number
    export const KEY_kana_yo:number
    export const KEY_kana_yu:number
    export const KEY_kappa:number
    export const KEY_kcedilla:number
    export const KEY_kra:number
    export const KEY_l:number
    export const KEY_lacute:number
    export const KEY_latincross:number
    export const KEY_lbelowdot:number
    export const KEY_lcaron:number
    export const KEY_lcedilla:number
    export const KEY_leftanglebracket:number
    export const KEY_leftarrow:number
    export const KEY_leftcaret:number
    export const KEY_leftdoublequotemark:number
    export const KEY_leftmiddlecurlybrace:number
    export const KEY_leftopentriangle:number
    export const KEY_leftpointer:number
    export const KEY_leftradical:number
    export const KEY_leftshoe:number
    export const KEY_leftsinglequotemark:number
    export const KEY_leftt:number
    export const KEY_lefttack:number
    export const KEY_less:number
    export const KEY_lessthanequal:number
    export const KEY_lf:number
    export const KEY_logicaland:number
    export const KEY_logicalor:number
    export const KEY_lowleftcorner:number
    export const KEY_lowrightcorner:number
    export const KEY_lstroke:number
    export const KEY_m:number
    export const KEY_mabovedot:number
    export const KEY_macron:number
    export const KEY_malesymbol:number
    export const KEY_maltesecross:number
    export const KEY_marker:number
    export const KEY_masculine:number
    export const KEY_minus:number
    export const KEY_minutes:number
    export const KEY_mu:number
    export const KEY_multiply:number
    export const KEY_musicalflat:number
    export const KEY_musicalsharp:number
    export const KEY_n:number
    export const KEY_nabla:number
    export const KEY_nacute:number
    export const KEY_ncaron:number
    export const KEY_ncedilla:number
    export const KEY_ninesubscript:number
    export const KEY_ninesuperior:number
    export const KEY_nl:number
    export const KEY_nobreakspace:number
    export const KEY_notapproxeq:number
    export const KEY_notelementof:number
    export const KEY_notequal:number
    export const KEY_notidentical:number
    export const KEY_notsign:number
    export const KEY_ntilde:number
    export const KEY_numbersign:number
    export const KEY_numerosign:number
    export const KEY_o:number
    export const KEY_oacute:number
    export const KEY_obarred:number
    export const KEY_obelowdot:number
    export const KEY_ocaron:number
    export const KEY_ocircumflex:number
    export const KEY_ocircumflexacute:number
    export const KEY_ocircumflexbelowdot:number
    export const KEY_ocircumflexgrave:number
    export const KEY_ocircumflexhook:number
    export const KEY_ocircumflextilde:number
    export const KEY_odiaeresis:number
    export const KEY_odoubleacute:number
    export const KEY_oe:number
    export const KEY_ogonek:number
    export const KEY_ograve:number
    export const KEY_ohook:number
    export const KEY_ohorn:number
    export const KEY_ohornacute:number
    export const KEY_ohornbelowdot:number
    export const KEY_ohorngrave:number
    export const KEY_ohornhook:number
    export const KEY_ohorntilde:number
    export const KEY_omacron:number
    export const KEY_oneeighth:number
    export const KEY_onefifth:number
    export const KEY_onehalf:number
    export const KEY_onequarter:number
    export const KEY_onesixth:number
    export const KEY_onesubscript:number
    export const KEY_onesuperior:number
    export const KEY_onethird:number
    export const KEY_ooblique:number
    export const KEY_openrectbullet:number
    export const KEY_openstar:number
    export const KEY_opentribulletdown:number
    export const KEY_opentribulletup:number
    export const KEY_ordfeminine:number
    export const KEY_oslash:number
    export const KEY_otilde:number
    export const KEY_overbar:number
    export const KEY_overline:number
    export const KEY_p:number
    export const KEY_pabovedot:number
    export const KEY_paragraph:number
    export const KEY_parenleft:number
    export const KEY_parenright:number
    export const KEY_partdifferential:number
    export const KEY_partialderivative:number
    export const KEY_percent:number
    export const KEY_period:number
    export const KEY_periodcentered:number
    export const KEY_permille:number
    export const KEY_phonographcopyright:number
    export const KEY_plus:number
    export const KEY_plusminus:number
    export const KEY_prescription:number
    export const KEY_prolongedsound:number
    export const KEY_punctspace:number
    export const KEY_q:number
    export const KEY_quad:number
    export const KEY_question:number
    export const KEY_questiondown:number
    export const KEY_quotedbl:number
    export const KEY_quoteleft:number
    export const KEY_quoteright:number
    export const KEY_r:number
    export const KEY_racute:number
    export const KEY_radical:number
    export const KEY_rcaron:number
    export const KEY_rcedilla:number
    export const KEY_registered:number
    export const KEY_rightanglebracket:number
    export const KEY_rightarrow:number
    export const KEY_rightcaret:number
    export const KEY_rightdoublequotemark:number
    export const KEY_rightmiddlecurlybrace:number
    export const KEY_rightmiddlesummation:number
    export const KEY_rightopentriangle:number
    export const KEY_rightpointer:number
    export const KEY_rightshoe:number
    export const KEY_rightsinglequotemark:number
    export const KEY_rightt:number
    export const KEY_righttack:number
    export const KEY_s:number
    export const KEY_sabovedot:number
    export const KEY_sacute:number
    export const KEY_scaron:number
    export const KEY_scedilla:number
    export const KEY_schwa:number
    export const KEY_scircumflex:number
    export const KEY_script_switch:number
    export const KEY_seconds:number
    export const KEY_section:number
    export const KEY_semicolon:number
    export const KEY_semivoicedsound:number
    export const KEY_seveneighths:number
    export const KEY_sevensubscript:number
    export const KEY_sevensuperior:number
    export const KEY_signaturemark:number
    export const KEY_signifblank:number
    export const KEY_similarequal:number
    export const KEY_singlelowquotemark:number
    export const KEY_sixsubscript:number
    export const KEY_sixsuperior:number
    export const KEY_slash:number
    export const KEY_soliddiamond:number
    export const KEY_space:number
    export const KEY_squareroot:number
    export const KEY_ssharp:number
    export const KEY_sterling:number
    export const KEY_stricteq:number
    export const KEY_t:number
    export const KEY_tabovedot:number
    export const KEY_tcaron:number
    export const KEY_tcedilla:number
    export const KEY_telephone:number
    export const KEY_telephonerecorder:number
    export const KEY_therefore:number
    export const KEY_thinspace:number
    export const KEY_thorn:number
    export const KEY_threeeighths:number
    export const KEY_threefifths:number
    export const KEY_threequarters:number
    export const KEY_threesubscript:number
    export const KEY_threesuperior:number
    export const KEY_tintegral:number
    export const KEY_topintegral:number
    export const KEY_topleftparens:number
    export const KEY_topleftradical:number
    export const KEY_topleftsqbracket:number
    export const KEY_topleftsummation:number
    export const KEY_toprightparens:number
    export const KEY_toprightsqbracket:number
    export const KEY_toprightsummation:number
    export const KEY_topt:number
    export const KEY_topvertsummationconnector:number
    export const KEY_trademark:number
    export const KEY_trademarkincircle:number
    export const KEY_tslash:number
    export const KEY_twofifths:number
    export const KEY_twosubscript:number
    export const KEY_twosuperior:number
    export const KEY_twothirds:number
    export const KEY_u:number
    export const KEY_uacute:number
    export const KEY_ubelowdot:number
    export const KEY_ubreve:number
    export const KEY_ucircumflex:number
    export const KEY_udiaeresis:number
    export const KEY_udoubleacute:number
    export const KEY_ugrave:number
    export const KEY_uhook:number
    export const KEY_uhorn:number
    export const KEY_uhornacute:number
    export const KEY_uhornbelowdot:number
    export const KEY_uhorngrave:number
    export const KEY_uhornhook:number
    export const KEY_uhorntilde:number
    export const KEY_umacron:number
    export const KEY_underbar:number
    export const KEY_underscore:number
    export const KEY_union:number
    export const KEY_uogonek:number
    export const KEY_uparrow:number
    export const KEY_upcaret:number
    export const KEY_upleftcorner:number
    export const KEY_uprightcorner:number
    export const KEY_upshoe:number
    export const KEY_upstile:number
    export const KEY_uptack:number
    export const KEY_uring:number
    export const KEY_utilde:number
    export const KEY_v:number
    export const KEY_variation:number
    export const KEY_vertbar:number
    export const KEY_vertconnector:number
    export const KEY_voicedsound:number
    export const KEY_vt:number
    export const KEY_w:number
    export const KEY_wacute:number
    export const KEY_wcircumflex:number
    export const KEY_wdiaeresis:number
    export const KEY_wgrave:number
    export const KEY_x:number
    export const KEY_xabovedot:number
    export const KEY_y:number
    export const KEY_yacute:number
    export const KEY_ybelowdot:number
    export const KEY_ycircumflex:number
    export const KEY_ydiaeresis:number
    export const KEY_yen:number
    export const KEY_ygrave:number
    export const KEY_yhook:number
    export const KEY_ytilde:number
    export const KEY_z:number
    export const KEY_zabovedot:number
    export const KEY_zacute:number
    export const KEY_zcaron:number
    export const KEY_zerosubscript:number
    export const KEY_zerosuperior:number
    export const KEY_zstroke:number
    export const MAX_TIMECOORD_AXES:number
    export const PARENT_RELATIVE:number
    export const PRIORITY_REDRAW:number
    export function add_option_entries_libgtk_only(group: any):void
    export function atom_intern(atom_name: string, only_if_exists: boolean):any
    export function atom_intern_static_string(atom_name: string):any
    export function beep():void
    export function cairo_create(window: Window):any
    export function cairo_draw_from_gl(cr: any, window: Window, source: number, source_type: number, buffer_scale: number, x: number, y: number, width: number, height: number):void
    export function cairo_get_clip_rectangle(cr: any, rect: any):boolean
    export function cairo_rectangle(cr: any, rectangle: any):void
    export function cairo_region(cr: any, region: any):void
    export function cairo_region_create_from_surface(surface: any):any
    export function cairo_set_source_color(cr: any, color: any):void
    export function cairo_set_source_pixbuf(cr: any, pixbuf: any, pixbuf_x: number, pixbuf_y: number):void
    export function cairo_set_source_rgba(cr: any, rgba: any):void
    export function cairo_set_source_window(cr: any, window: Window, x: number, y: number):void
    export function cairo_surface_create_from_pixbuf(pixbuf: any, scale: number, for_window: Window):any
    export function color_parse(spec: string, color: any):boolean
    export function disable_multidevice():void
    export function drag_abort(context: DragContext, time_: number):void
    export function drag_begin(window: Window, targets: any):DragContext
    export function drag_begin_for_device(window: Window, device: Device, targets: any):DragContext
    export function drag_drop(context: DragContext, time_: number):void
    export function drag_drop_succeeded(context: DragContext):boolean
    export function drag_find_window_for_screen(context: DragContext, drag_window: Window, screen: Screen, x_root: number, y_root: number, dest_window: Window, protocol: DragProtocol):void
    export function drag_get_selection(context: DragContext):any
    export function drag_motion(context: DragContext, dest_window: Window, protocol: DragProtocol, x_root: number, y_root: number, suggested_action: DragAction, possible_actions: DragAction, time_: number):boolean
    export function drag_status(context: DragContext, action: DragAction, time_: number):void
    export function drop_finish(context: DragContext, success: boolean, time_: number):void
    export function drop_reply(context: DragContext, accepted: boolean, time_: number):void
    export function error_trap_pop():number
    export function error_trap_pop_ignored():void
    export function error_trap_push():void
    export function event_get():any
    export function event_handler_set(func: any, data: any, notify: any):void
    export function event_peek():any
    export function event_request_motions(event: any):void
    export function events_get_angle(event1: any, event2: any, angle: number):boolean
    export function events_get_center(event1: any, event2: any, x: number, y: number):boolean
    export function events_get_distance(event1: any, event2: any, distance: number):boolean
    export function events_pending():boolean
    export function flush():void
    export function get_default_root_window():Window
    export function get_display():string
    export function get_display_arg_name():string
    export function get_program_class():string
    export function get_show_events():boolean
    export function gl_error_quark():any
    export function init(argv:string[]):void
    export function init_check(argv:string[]):boolean
    export function keyboard_grab(window: Window, owner_events: boolean, time_: number):GrabStatus
    export function keyboard_ungrab(time_: number):void
    export function keyval_convert_case(symbol: number, lower: number, upper: number):void
    export function keyval_from_name(keyval_name: string):number
    export function keyval_is_lower(keyval: number):boolean
    export function keyval_is_upper(keyval: number):boolean
    export function keyval_name(keyval: number):string
    export function keyval_to_lower(keyval: number):number
    export function keyval_to_unicode(keyval: number):number
    export function keyval_to_upper(keyval: number):number
    export function list_visuals():any
    export function notify_startup_complete():void
    export function notify_startup_complete_with_id(startup_id: string):void
    export function offscreen_window_get_embedder(window: Window):Window
    export function offscreen_window_get_surface(window: Window):any
    export function offscreen_window_set_embedder(window: Window, embedder: Window):void
    export function pango_context_get():Pango.Context
    export function pango_context_get_for_screen(screen: Screen):Pango.Context
    export function pango_layout_get_clip_region(layout: Pango.Layout, x_origin: number, y_origin: number, index_ranges: number, n_ranges: number):any
    export function pango_layout_line_get_clip_region(line: any, x_origin: number, y_origin: number, index_ranges: number[], n_ranges: number):any
    export function parse_args(argv:string[]):void
    export function pixbuf_get_from_surface(surface: any, src_x: number, src_y: number, width: number, height: number):any
    export function pixbuf_get_from_window(window: Window, src_x: number, src_y: number, width: number, height: number):any
    export function pointer_grab(window: Window, owner_events: boolean, event_mask: EventMask, confine_to: Window, cursor: Cursor, time_: number):GrabStatus
    export function pointer_is_grabbed():boolean
    export function pointer_ungrab(time_: number):void
    export function pre_parse_libgtk_only():void
    export function property_change(window: Window, property: any, type: any, format: number, mode: PropMode, data: number, nelements: number):void
    export function property_delete(window: Window, property: any):void
    export function property_get(window: Window, property: any, type: any, offset: number, length: number, pdelete: number, actual_property_type: any, actual_format: number, actual_length: number, data: number[]):boolean
    export function query_depths(depths: number[], count: number):void
    export function query_visual_types(visual_types: VisualType[], count: number):void
    export function selection_convert(requestor: Window, selection: any, target: any, time_: number):void
    export function selection_owner_get(selection: any):Window
    export function selection_owner_get_for_display(display: Display, selection: any):Window
    export function selection_owner_set(owner: Window, selection: any, time_: number, send_event: boolean):boolean
    export function selection_owner_set_for_display(display: Display, owner: Window, selection: any, time_: number, send_event: boolean):boolean
    export function selection_property_get(requestor: Window, data: number, prop_type: any, prop_format: number):number
    export function selection_send_notify(requestor: Window, selection: any, target: any, property: any, time_: number):void
    export function selection_send_notify_for_display(display: Display, requestor: Window, selection: any, target: any, property: any, time_: number):void
    export function set_allowed_backends(backends: string):void
    export function set_double_click_time(msec: number):void
    export function set_program_class(program_class: string):void
    export function set_show_events(show_events: boolean):void
    export function setting_get(name: string, value: any):boolean
    export function synthesize_window_state(window: Window, unset_flags: WindowState, set_flags: WindowState):void
    export function test_render_sync(window: Window):void
    export function test_simulate_button(window: Window, x: number, y: number, button: number, modifiers: ModifierType, button_pressrelease: EventType):boolean
    export function test_simulate_key(window: Window, x: number, y: number, keyval: number, modifiers: ModifierType, key_pressrelease: EventType):boolean
    export function text_property_to_utf8_list_for_display(display: Display, encoding: any, format: number, text: number[], length: number, list: string[]):number
    export function threads_add_idle(function_: any, data: any):number
    export function threads_add_idle_full(priority: number, function_: any, data: any, notify: any):number
    export function threads_add_timeout(interval: number, function_: any, data: any):number
    export function threads_add_timeout_full(priority: number, interval: number, function_: any, data: any, notify: any):number
    export function threads_add_timeout_seconds(interval: number, function_: any, data: any):number
    export function threads_add_timeout_seconds_full(priority: number, interval: number, function_: any, data: any, notify: any):number
    export function threads_enter():void
    export function threads_init():void
    export function threads_leave():void
    export function threads_set_lock_functions(enter_fn: any, leave_fn: any):void
    export function unicode_to_keyval(wc: number):number
    export function utf8_to_string_target(str: string):string
    export enum AxisUse {
        IGNORE,
        X,
        Y,
        PRESSURE,
        XTILT,
        YTILT,
        WHEEL,
        LAST,
    }
    export enum ByteOrder {
        LSB_FIRST,
        MSB_FIRST,
    }
    export enum CrossingMode {
        NORMAL,
        GRAB,
        UNGRAB,
        GTK_GRAB,
        GTK_UNGRAB,
        STATE_CHANGED,
        TOUCH_BEGIN,
        TOUCH_END,
        DEVICE_SWITCH,
    }
    export enum CursorType {
        X_CURSOR,
        ARROW,
        BASED_ARROW_DOWN,
        BASED_ARROW_UP,
        BOAT,
        BOGOSITY,
        BOTTOM_LEFT_CORNER,
        BOTTOM_RIGHT_CORNER,
        BOTTOM_SIDE,
        BOTTOM_TEE,
        BOX_SPIRAL,
        CENTER_PTR,
        CIRCLE,
        CLOCK,
        COFFEE_MUG,
        CROSS,
        CROSS_REVERSE,
        CROSSHAIR,
        DIAMOND_CROSS,
        DOT,
        DOTBOX,
        DOUBLE_ARROW,
        DRAFT_LARGE,
        DRAFT_SMALL,
        DRAPED_BOX,
        EXCHANGE,
        FLEUR,
        GOBBLER,
        GUMBY,
        HAND1,
        HAND2,
        HEART,
        ICON,
        IRON_CROSS,
        LEFT_PTR,
        LEFT_SIDE,
        LEFT_TEE,
        LEFTBUTTON,
        LL_ANGLE,
        LR_ANGLE,
        MAN,
        MIDDLEBUTTON,
        MOUSE,
        PENCIL,
        PIRATE,
        PLUS,
        QUESTION_ARROW,
        RIGHT_PTR,
        RIGHT_SIDE,
        RIGHT_TEE,
        RIGHTBUTTON,
        RTL_LOGO,
        SAILBOAT,
        SB_DOWN_ARROW,
        SB_H_DOUBLE_ARROW,
        SB_LEFT_ARROW,
        SB_RIGHT_ARROW,
        SB_UP_ARROW,
        SB_V_DOUBLE_ARROW,
        SHUTTLE,
        SIZING,
        SPIDER,
        SPRAYCAN,
        STAR,
        TARGET,
        TCROSS,
        TOP_LEFT_ARROW,
        TOP_LEFT_CORNER,
        TOP_RIGHT_CORNER,
        TOP_SIDE,
        TOP_TEE,
        TREK,
        UL_ANGLE,
        UMBRELLA,
        UR_ANGLE,
        WATCH,
        XTERM,
        LAST_CURSOR,
        BLANK_CURSOR,
        CURSOR_IS_PIXMAP,
    }
    export enum DeviceType {
        MASTER,
        SLAVE,
        FLOATING,
    }
    export enum DragProtocol {
        NONE,
        MOTIF,
        XDND,
        ROOTWIN,
        WIN32_DROPFILES,
        OLE2,
        LOCAL,
        WAYLAND,
    }
    export enum EventType {
        NOTHING,
        DELETE,
        DESTROY,
        EXPOSE,
        MOTION_NOTIFY,
        BUTTON_PRESS,
        _2BUTTON_PRESS,
        DOUBLE_BUTTON_PRESS,
        _3BUTTON_PRESS,
        TRIPLE_BUTTON_PRESS,
        BUTTON_RELEASE,
        KEY_PRESS,
        KEY_RELEASE,
        ENTER_NOTIFY,
        LEAVE_NOTIFY,
        FOCUS_CHANGE,
        CONFIGURE,
        MAP,
        UNMAP,
        PROPERTY_NOTIFY,
        SELECTION_CLEAR,
        SELECTION_REQUEST,
        SELECTION_NOTIFY,
        PROXIMITY_IN,
        PROXIMITY_OUT,
        DRAG_ENTER,
        DRAG_LEAVE,
        DRAG_MOTION,
        DRAG_STATUS,
        DROP_START,
        DROP_FINISHED,
        CLIENT_EVENT,
        VISIBILITY_NOTIFY,
        SCROLL,
        WINDOW_STATE,
        SETTING,
        OWNER_CHANGE,
        GRAB_BROKEN,
        DAMAGE,
        TOUCH_BEGIN,
        TOUCH_UPDATE,
        TOUCH_END,
        TOUCH_CANCEL,
        TOUCHPAD_SWIPE,
        TOUCHPAD_PINCH,
        EVENT_LAST,
    }
    export enum FilterReturn {
        CONTINUE,
        TRANSLATE,
        REMOVE,
    }
    export enum FullscreenMode {
        CURRENT_MONITOR,
        ALL_MONITORS,
    }
    export enum GLError {
        NOT_AVAILABLE,
        UNSUPPORTED_FORMAT,
        UNSUPPORTED_PROFILE,
    }
    export enum GrabOwnership {
        NONE,
        WINDOW,
        APPLICATION,
    }
    export enum GrabStatus {
        SUCCESS,
        ALREADY_GRABBED,
        INVALID_TIME,
        NOT_VIEWABLE,
        FROZEN,
        FAILED,
    }
    export enum Gravity {
        NORTH_WEST,
        NORTH,
        NORTH_EAST,
        WEST,
        CENTER,
        EAST,
        SOUTH_WEST,
        SOUTH,
        SOUTH_EAST,
        STATIC,
    }
    export enum InputMode {
        DISABLED,
        SCREEN,
        WINDOW,
    }
    export enum InputSource {
        MOUSE,
        PEN,
        ERASER,
        CURSOR,
        KEYBOARD,
        TOUCHSCREEN,
        TOUCHPAD,
    }
    export enum ModifierIntent {
        PRIMARY_ACCELERATOR,
        CONTEXT_MENU,
        EXTEND_SELECTION,
        MODIFY_SELECTION,
        NO_TEXT_INPUT,
        SHIFT_GROUP,
        DEFAULT_MOD_MASK,
    }
    export enum NotifyType {
        ANCESTOR,
        VIRTUAL,
        INFERIOR,
        NONLINEAR,
        NONLINEAR_VIRTUAL,
        UNKNOWN,
    }
    export enum OwnerChange {
        NEW_OWNER,
        DESTROY,
        CLOSE,
    }
    export enum PropMode {
        REPLACE,
        PREPEND,
        APPEND,
    }
    export enum PropertyState {
        NEW_VALUE,
        DELETE,
    }
    export enum ScrollDirection {
        UP,
        DOWN,
        LEFT,
        RIGHT,
        SMOOTH,
    }
    export enum SettingAction {
        NEW,
        CHANGED,
        DELETED,
    }
    export enum Status {
        OK,
        ERROR,
        ERROR_PARAM,
        ERROR_FILE,
        ERROR_MEM,
    }
    export enum TouchpadGesturePhase {
        BEGIN,
        UPDATE,
        END,
        CANCEL,
    }
    export enum VisibilityState {
        UNOBSCURED,
        PARTIAL,
        FULLY_OBSCURED,
    }
    export enum VisualType {
        STATIC_GRAY,
        GRAYSCALE,
        STATIC_COLOR,
        PSEUDO_COLOR,
        TRUE_COLOR,
        DIRECT_COLOR,
    }
    export enum WindowEdge {
        NORTH_WEST,
        NORTH,
        NORTH_EAST,
        WEST,
        EAST,
        SOUTH_WEST,
        SOUTH,
        SOUTH_EAST,
    }
    export enum WindowType {
        ROOT,
        TOPLEVEL,
        CHILD,
        TEMP,
        FOREIGN,
        OFFSCREEN,
        SUBSURFACE,
    }
    export enum WindowTypeHint {
        NORMAL,
        DIALOG,
        MENU,
        TOOLBAR,
        SPLASHSCREEN,
        UTILITY,
        DOCK,
        DESKTOP,
        DROPDOWN_MENU,
        POPUP_MENU,
        TOOLTIP,
        NOTIFICATION,
        COMBO,
        DND,
    }
    export enum WindowWindowClass {
        INPUT_OUTPUT,
        INPUT_ONLY,
    }
    export enum DragAction{
        DEFAULT,
        COPY,
        MOVE,
        LINK,
        PRIVATE,
        ASK,
    }
    export enum EventMask{
        EXPOSURE_MASK,
        POINTER_MOTION_MASK,
        POINTER_MOTION_HINT_MASK,
        BUTTON_MOTION_MASK,
        BUTTON1_MOTION_MASK,
        BUTTON2_MOTION_MASK,
        BUTTON3_MOTION_MASK,
        BUTTON_PRESS_MASK,
        BUTTON_RELEASE_MASK,
        KEY_PRESS_MASK,
        KEY_RELEASE_MASK,
        ENTER_NOTIFY_MASK,
        LEAVE_NOTIFY_MASK,
        FOCUS_CHANGE_MASK,
        STRUCTURE_MASK,
        PROPERTY_CHANGE_MASK,
        VISIBILITY_NOTIFY_MASK,
        PROXIMITY_IN_MASK,
        PROXIMITY_OUT_MASK,
        SUBSTRUCTURE_MASK,
        SCROLL_MASK,
        TOUCH_MASK,
        SMOOTH_SCROLL_MASK,
        TOUCHPAD_GESTURE_MASK,
        ALL_EVENTS_MASK,
    }
    export enum FrameClockPhase{
        NONE,
        FLUSH_EVENTS,
        BEFORE_PAINT,
        UPDATE,
        LAYOUT,
        PAINT,
        RESUME_EVENTS,
        AFTER_PAINT,
    }
    export enum ModifierType{
        SHIFT_MASK,
        LOCK_MASK,
        CONTROL_MASK,
        MOD1_MASK,
        MOD2_MASK,
        MOD3_MASK,
        MOD4_MASK,
        MOD5_MASK,
        BUTTON1_MASK,
        BUTTON2_MASK,
        BUTTON3_MASK,
        BUTTON4_MASK,
        BUTTON5_MASK,
        MODIFIER_RESERVED_13_MASK,
        MODIFIER_RESERVED_14_MASK,
        MODIFIER_RESERVED_15_MASK,
        MODIFIER_RESERVED_16_MASK,
        MODIFIER_RESERVED_17_MASK,
        MODIFIER_RESERVED_18_MASK,
        MODIFIER_RESERVED_19_MASK,
        MODIFIER_RESERVED_20_MASK,
        MODIFIER_RESERVED_21_MASK,
        MODIFIER_RESERVED_22_MASK,
        MODIFIER_RESERVED_23_MASK,
        MODIFIER_RESERVED_24_MASK,
        MODIFIER_RESERVED_25_MASK,
        SUPER_MASK,
        HYPER_MASK,
        META_MASK,
        MODIFIER_RESERVED_29_MASK,
        RELEASE_MASK,
        MODIFIER_MASK,
    }
    export enum WMDecoration{
        ALL,
        BORDER,
        RESIZEH,
        TITLE,
        MENU,
        MINIMIZE,
        MAXIMIZE,
    }
    export enum WMFunction{
        ALL,
        RESIZE,
        MOVE,
        MINIMIZE,
        MAXIMIZE,
        CLOSE,
    }
    export enum WindowAttributesType{
        TITLE,
        X,
        Y,
        CURSOR,
        VISUAL,
        WMCLASS,
        NOREDIR,
        TYPE_HINT,
    }
    export enum WindowHints{
        POS,
        MIN_SIZE,
        MAX_SIZE,
        BASE_SIZE,
        ASPECT,
        RESIZE_INC,
        WIN_GRAVITY,
        USER_POS,
        USER_SIZE,
    }
    export enum WindowState{
        WITHDRAWN,
        ICONIFIED,
        MAXIMIZED,
        STICKY,
        FULLSCREEN,
        ABOVE,
        BELOW,
        FOCUSED,
        TILED,
    }
    export class AppLaunchContext extends Gio.AppLaunchContext {
        constructor(config?: any)
        set_desktop(desktop: number):void
        set_display(display: Display):void
        set_icon(icon: any):void
        set_icon_name(icon_name: string):void
        set_screen(screen: Screen):void
        set_timestamp(timestamp: number):void
    }
    export class Cursor extends GObject.Object {
        constructor(config?: any)
        static new_for_display(display: Display, cursor_type: CursorType):Cursor
        static new_from_name(display: Display, name: string):Cursor
        static new_from_pixbuf(display: Display, pixbuf: any, x: number, y: number):Cursor
        static new_from_surface(display: Display, surface: any, x: number, y: number):Cursor
        get_cursor_type():CursorType
        get_display():Display
        get_image():any
        get_surface(x_hot: number, y_hot: number):any
        ref():Cursor
        unref():void
    }
    export class Device extends GObject.Object {
        static free_history(events: any[], n_events: number):void
        static grab_info_libgtk_only(display: Display, device: Device, grab_window: Window, owner_events: boolean):boolean
        get_associated_device():Device
        get_axis(axes: number[], use: AxisUse, value: number):boolean
        get_axis_use(index_: number):AxisUse
        get_axis_value(axes: number[], axis_label: any, value: number):boolean
        get_device_type():DeviceType
        get_display():Display
        get_has_cursor():boolean
        get_history(window: Window, start: number, stop: number, events: any[], n_events: number):boolean
        get_key(index_: number, keyval: number, modifiers: ModifierType):boolean
        get_last_event_window():Window
        get_mode():InputMode
        get_n_axes():number
        get_n_keys():number
        get_name():string
        get_position(screen: Screen, x: number, y: number):void
        get_position_double(screen: Screen, x: number, y: number):void
        get_product_id():string
        get_source():InputSource
        get_state(window: Window, axes: number[], mask: ModifierType):void
        get_vendor_id():string
        get_window_at_position(win_x: number, win_y: number):Window
        get_window_at_position_double(win_x: number, win_y: number):Window
        grab(window: Window, grab_ownership: GrabOwnership, owner_events: boolean, event_mask: EventMask, cursor: Cursor, time_: number):GrabStatus
        list_axes():any
        list_slave_devices():any
        set_axis_use(index_: number, use: AxisUse):void
        set_key(index_: number, keyval: number, modifiers: ModifierType):void
        set_mode(mode: InputMode):boolean
        ungrab(time_: number):void
        warp(screen: Screen, x: number, y: number):void
    }
    export class DeviceManager extends GObject.Object {
        get_client_pointer():Device
        get_display():Display
        list_devices(type: DeviceType):any
    }
    export class Display extends GObject.Object {
        static get_default():Display
        static open(display_name: string):Display
        static open_default_libgtk_only():Display
        beep():void
        close():void
        device_is_grabbed(device: Device):boolean
        flush():void
        get_app_launch_context():AppLaunchContext
        get_default_cursor_size():number
        get_default_group():Window
        get_default_screen():Screen
        get_device_manager():DeviceManager
        get_event():any
        get_maximal_cursor_size(width: number, height: number):void
        get_n_screens():number
        get_name():string
        get_pointer(screen: Screen, x: number, y: number, mask: ModifierType):void
        get_screen(screen_num: number):Screen
        get_window_at_pointer(win_x: number, win_y: number):Window
        has_pending():boolean
        is_closed():boolean
        keyboard_ungrab(time_: number):void
        list_devices():any
        notify_startup_complete(startup_id: string):void
        peek_event():any
        pointer_is_grabbed():boolean
        pointer_ungrab(time_: number):void
        put_event(event: any):void
        request_selection_notification(selection: any):boolean
        set_double_click_distance(distance: number):void
        set_double_click_time(msec: number):void
        store_clipboard(clipboard_window: Window, time_: number, targets: any[], n_targets: number):void
        supports_clipboard_persistence():boolean
        supports_composite():boolean
        supports_cursor_alpha():boolean
        supports_cursor_color():boolean
        supports_input_shapes():boolean
        supports_selection_notification():boolean
        supports_shapes():boolean
        sync():void
        warp_pointer(screen: Screen, x: number, y: number):void
    }
    export class DisplayManager extends GObject.Object {
        static get():DisplayManager
        get_default_display():Display
        list_displays():any
        open_display(name: string):Display
        set_default_display(display: Display):void
    }
    export class DragContext extends GObject.Object {
        get_actions():DragAction
        get_dest_window():Window
        get_device():Device
        get_protocol():DragProtocol
        get_selected_action():DragAction
        get_source_window():Window
        get_suggested_action():DragAction
        list_targets():any
        set_device(device: Device):void
    }
    export class FrameClock extends GObject.Object {
        begin_updating():void
        end_updating():void
        get_current_timings():any
        get_frame_counter():number
        get_frame_time():number
        get_history_start():number
        get_refresh_info(base_time: number, refresh_interval_return: number, presentation_time_return: number):void
        get_timings(frame_counter: number):any
        request_phase(phase: FrameClockPhase):void
    }
    export class GLContext extends GObject.Object {
        static clear_current():void
        static get_current():GLContext
        get_debug_enabled():boolean
        get_display():Display
        get_forward_compatible():boolean
        get_required_version(major: number, minor: number):void
        get_shared_context():GLContext
        get_version(major: number, minor: number):void
        get_window():Window
        make_current():void
        realize():boolean
        set_debug_enabled(enabled: boolean):void
        set_forward_compatible(compatible: boolean):void
        set_required_version(major: number, minor: number):void
    }
    export class Keymap extends GObject.Object {
        static get_default():Keymap
        static get_for_display(display: Display):Keymap
        add_virtual_modifiers(state: ModifierType):void
        get_caps_lock_state():boolean
        get_direction():Pango.Direction
        get_entries_for_keycode(hardware_keycode: number, keys: any[], keyvals: number[], n_entries: number):boolean
        get_entries_for_keyval(keyval: number, keys: any[], n_keys: number):boolean
        get_modifier_mask(intent: ModifierIntent):ModifierType
        get_modifier_state():number
        get_num_lock_state():boolean
        get_scroll_lock_state():boolean
        have_bidi_layouts():boolean
        lookup_key(key: any):number
        map_virtual_modifiers(state: ModifierType):boolean
        translate_keyboard_state(hardware_keycode: number, state: ModifierType, group: number, keyval: number, effective_group: number, level: number, consumed_modifiers: ModifierType):boolean
    }
    export class Screen extends GObject.Object {
        static get_default():Screen
        static height():number
        static height_mm():number
        static width():number
        static width_mm():number
        get_active_window():Window
        get_display():Display
        get_font_options():any
        get_height():number
        get_height_mm():number
        get_monitor_at_point(x: number, y: number):number
        get_monitor_at_window(window: Window):number
        get_monitor_geometry(monitor_num: number, dest: any):void
        get_monitor_height_mm(monitor_num: number):number
        get_monitor_plug_name(monitor_num: number):string
        get_monitor_scale_factor(monitor_num: number):number
        get_monitor_width_mm(monitor_num: number):number
        get_monitor_workarea(monitor_num: number, dest: any):void
        get_n_monitors():number
        get_number():number
        get_primary_monitor():number
        get_resolution():number
        get_rgba_visual():Visual
        get_root_window():Window
        get_setting(name: string, value: any):boolean
        get_system_visual():Visual
        get_toplevel_windows():any
        get_width():number
        get_width_mm():number
        get_window_stack():any
        is_composited():boolean
        list_visuals():any
        make_display_name():string
        set_font_options(options: any):void
        set_resolution(dpi: number):void
    }
    export class Visual extends GObject.Object {
        static get_best():Visual
        static get_best_depth():number
        static get_best_type():VisualType
        static get_best_with_both(depth: number, visual_type: VisualType):Visual
        static get_best_with_depth(depth: number):Visual
        static get_best_with_type(visual_type: VisualType):Visual
        static get_system():Visual
        get_bits_per_rgb():number
        get_blue_pixel_details(mask: number, shift: number, precision: number):void
        get_byte_order():ByteOrder
        get_colormap_size():number
        get_depth():number
        get_green_pixel_details(mask: number, shift: number, precision: number):void
        get_red_pixel_details(mask: number, shift: number, precision: number):void
        get_screen():Screen
        get_visual_type():VisualType
    }
    export class Window extends GObject.Object {
        static at_pointer(win_x: number, win_y: number):Window
        static constrain_size(geometry: any, flags: WindowHints, width: number, height: number, new_width: number, new_height: number):void
        static process_all_updates():void
        static set_debug_updates(setting: boolean):void
        constructor(config?: any)
        add_filter(function_: any, data: any):void
        beep():void
        begin_move_drag(button: number, root_x: number, root_y: number, timestamp: number):void
        begin_move_drag_for_device(device: Device, button: number, root_x: number, root_y: number, timestamp: number):void
        begin_paint_rect(rectangle: any):void
        begin_paint_region(region: any):void
        begin_resize_drag(edge: WindowEdge, button: number, root_x: number, root_y: number, timestamp: number):void
        begin_resize_drag_for_device(edge: WindowEdge, device: Device, button: number, root_x: number, root_y: number, timestamp: number):void
        configure_finished():void
        coords_from_parent(parent_x: number, parent_y: number, x: number, y: number):void
        coords_to_parent(x: number, y: number, parent_x: number, parent_y: number):void
        create_gl_context():GLContext
        create_similar_image_surface(format: number, width: number, height: number, scale: number):any
        create_similar_surface(content: any, width: number, height: number):any
        deiconify():void
        destroy():void
        destroy_notify():void
        enable_synchronized_configure():void
        end_paint():void
        ensure_native():boolean
        flush():void
        focus(timestamp: number):void
        freeze_toplevel_updates_libgtk_only():void
        freeze_updates():void
        fullscreen():void
        fullscreen_on_monitor(monitor: number):void
        geometry_changed():void
        get_accept_focus():boolean
        get_background_pattern():any
        get_children():any
        get_children_with_user_data(user_data: any):any
        get_clip_region():any
        get_composited():boolean
        get_cursor():Cursor
        get_decorations(decorations: WMDecoration):boolean
        get_device_cursor(device: Device):Cursor
        get_device_events(device: Device):EventMask
        get_device_position(device: Device, x: number, y: number, mask: ModifierType):Window
        get_device_position_double(device: Device, x: number, y: number, mask: ModifierType):Window
        get_display():Display
        get_drag_protocol(target: Window):DragProtocol
        get_effective_parent():Window
        get_effective_toplevel():Window
        get_event_compression():boolean
        get_events():EventMask
        get_focus_on_map():boolean
        get_frame_clock():FrameClock
        get_frame_extents(rect: any):void
        get_fullscreen_mode():FullscreenMode
        get_geometry(x: number, y: number, width: number, height: number):void
        get_group():Window
        get_height():number
        get_modal_hint():boolean
        get_origin(x: number, y: number):number
        get_parent():Window
        get_pass_through():boolean
        get_pointer(x: number, y: number, mask: ModifierType):Window
        get_position(x: number, y: number):void
        get_root_coords(x: number, y: number, root_x: number, root_y: number):void
        get_root_origin(x: number, y: number):void
        get_scale_factor():number
        get_screen():Screen
        get_source_events(source: InputSource):EventMask
        get_state():WindowState
        get_support_multidevice():boolean
        get_toplevel():Window
        get_type_hint():WindowTypeHint
        get_update_area():any
        get_user_data(data: any):void
        get_visible_region():any
        get_visual():Visual
        get_width():number
        get_window_type():WindowType
        has_native():boolean
        hide():void
        iconify():void
        input_shape_combine_region(shape_region: any, offset_x: number, offset_y: number):void
        invalidate_maybe_recurse(region: any, child_func: any, user_data: any):void
        invalidate_rect(rect: any, invalidate_children: boolean):void
        invalidate_region(region: any, invalidate_children: boolean):void
        is_destroyed():boolean
        is_input_only():boolean
        is_shaped():boolean
        is_viewable():boolean
        is_visible():boolean
        lower():void
        mark_paint_from_clip(cr: any):void
        maximize():void
        merge_child_input_shapes():void
        merge_child_shapes():void
        move(x: number, y: number):void
        move_region(region: any, dx: number, dy: number):void
        move_resize(x: number, y: number, width: number, height: number):void
        peek_children():any
        process_updates(update_children: boolean):void
        raise():void
        register_dnd():void
        remove_filter(function_: any, data: any):void
        reparent(new_parent: Window, x: number, y: number):void
        resize(width: number, height: number):void
        restack(sibling: Window, above: boolean):void
        scroll(dx: number, dy: number):void
        set_accept_focus(accept_focus: boolean):void
        set_background(color: any):void
        set_background_pattern(pattern: any):void
        set_background_rgba(rgba: any):void
        set_child_input_shapes():void
        set_child_shapes():void
        set_composited(composited: boolean):void
        set_cursor(cursor: Cursor):void
        set_decorations(decorations: WMDecoration):void
        set_device_cursor(device: Device, cursor: Cursor):void
        set_device_events(device: Device, event_mask: EventMask):void
        set_event_compression(event_compression: boolean):void
        set_events(event_mask: EventMask):void
        set_focus_on_map(focus_on_map: boolean):void
        set_fullscreen_mode(mode: FullscreenMode):void
        set_functions(functions: WMFunction):void
        set_geometry_hints(geometry: any, geom_mask: WindowHints):void
        set_group(leader: Window):void
        set_icon_list(pixbufs: any):void
        set_icon_name(name: string):void
        set_invalidate_handler(handler: any):void
        set_keep_above(setting: boolean):void
        set_keep_below(setting: boolean):void
        set_modal_hint(modal: boolean):void
        set_opacity(opacity: number):void
        set_opaque_region(region: any):void
        set_override_redirect(override_redirect: boolean):void
        set_pass_through(pass_through: boolean):void
        set_role(role: string):void
        set_shadow_width(left: number, right: number, top: number, bottom: number):void
        set_skip_pager_hint(skips_pager: boolean):void
        set_skip_taskbar_hint(skips_taskbar: boolean):void
        set_source_events(source: InputSource, event_mask: EventMask):void
        set_startup_id(startup_id: string):void
        set_static_gravities(use_static: boolean):boolean
        set_support_multidevice(support_multidevice: boolean):void
        set_title(title: string):void
        set_transient_for(parent: Window):void
        set_type_hint(hint: WindowTypeHint):void
        set_urgency_hint(urgent: boolean):void
        set_user_data(user_data: GObject.Object):void
        shape_combine_region(shape_region: any, offset_x: number, offset_y: number):void
        show():void
        show_unraised():void
        show_window_menu(event: any):boolean
        stick():void
        thaw_toplevel_updates_libgtk_only():void
        thaw_updates():void
        unfullscreen():void
        unmaximize():void
        unstick():void
        withdraw():void
    }
}