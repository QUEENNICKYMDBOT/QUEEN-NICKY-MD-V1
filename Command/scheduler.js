const _0x3d12bd=_0x125f;function _0x125f(_0xeb0721,_0x4c8aa3){const _0x2d8aad=_0x2d8a();return _0x125f=function(_0x125f61,_0x783ec9){_0x125f61=_0x125f61-0x191;let _0x1e6dd0=_0x2d8aad[_0x125f61];return _0x1e6dd0;},_0x125f(_0xeb0721,_0x4c8aa3);}(function(_0x2db7ba,_0x43e5a6){const _0x16cb0d=_0x125f,_0x5be923=_0x2db7ba();while(!![]){try{const _0x3bdfa9=-parseInt(_0x16cb0d(0x19f))/0x1*(-parseInt(_0x16cb0d(0x191))/0x2)+-parseInt(_0x16cb0d(0x197))/0x3+parseInt(_0x16cb0d(0x1aa))/0x4+-parseInt(_0x16cb0d(0x1ae))/0x5+-parseInt(_0x16cb0d(0x1b0))/0x6+-parseInt(_0x16cb0d(0x19d))/0x7+parseInt(_0x16cb0d(0x1ab))/0x8*(parseInt(_0x16cb0d(0x192))/0x9);if(_0x3bdfa9===_0x43e5a6)break;else _0x5be923['push'](_0x5be923['shift']());}catch(_0x1c69ff){_0x5be923['push'](_0x5be923['shift']());}}}(_0x2d8a,0x7759d));const {tlang,sck,prefix,cmd}=require(_0x3d12bd(0x1a5));function _0x2d8a(){const _0x476942=['8IVVpZc','false','dmute','1891980aDcGYM','\x20successfully._','24864mcCcBg','22:00','1796218bmRcKf','12252717opAEhT','group','moderation','Mute\x20deleted\x20successfully.','Delete\x20mute\x20from\x20group.','2218389NrLLhO','There\x27s\x20no\x20mute\x20set\x20in\x20group.','_Mute\x20added\x20for\x20','Delete\x20unmute\x20from\x20group.','updateOne','Please\x20provide\x20correct\x20form.\x0aEg:\x20setmute\x20','5022220MJPttn','sets\x20unmute\x20time\x20in\x20group.','1lQuAuE','save','chat','findOne','owner','isGroup','../lib','split','Mute\x20added.','reply','amute','275208NHUoVh'];_0x2d8a=function(){return _0x476942;};return _0x2d8a();}cmd({'pattern':_0x3d12bd(0x1a9),'desc':'sets\x20auto\x20mute\x20time\x20in\x20group.','category':_0x3d12bd(0x194)},async(_0xaba3fe,_0x20ca3a,_0xabd3ae,{isCreator:_0x1cd5ce})=>{const _0x1b8fe2=_0x3d12bd;if(!_0x1cd5ce)return _0x20ca3a[_0x1b8fe2(0x1a8)](tlang()['owner']);if(!_0x20ca3a[_0x1b8fe2(0x1a4)])return _0x20ca3a[_0x1b8fe2(0x1a8)](tlang()[_0x1b8fe2(0x193)]);if(!_0xabd3ae['split'](':')[0x1])return _0x20ca3a[_0x1b8fe2(0x1a8)](_0x1b8fe2(0x19c)+prefix+_0x1b8fe2(0x1b1));let _0x435bf0=await sck[_0x1b8fe2(0x1a2)]({'id':_0x20ca3a[_0x1b8fe2(0x1a1)]});return!_0x435bf0?(await new sck({'id':_0x20ca3a[_0x1b8fe2(0x1a1)],'mute':_0xabd3ae})[_0x1b8fe2(0x1a0)](),_0x20ca3a[_0x1b8fe2(0x1a8)](_0x1b8fe2(0x1a7))):(await await sck[_0x1b8fe2(0x19b)]({'id':_0x20ca3a['chat']},{'mute':_0xabd3ae}),_0x20ca3a[_0x1b8fe2(0x1a8)](_0x1b8fe2(0x199)+_0xabd3ae+_0x1b8fe2(0x1af)));}),cmd({'pattern':'aunmute','desc':_0x3d12bd(0x19e),'category':_0x3d12bd(0x194)},async(_0x15c783,_0x164f77,_0xc2d7ff,{isCreator:_0x277f63})=>{const _0x1a926f=_0x3d12bd;if(!_0x277f63)return _0x164f77[_0x1a926f(0x1a8)](tlang()[_0x1a926f(0x1a3)]);if(!_0x164f77[_0x1a926f(0x1a4)])return _0x164f77[_0x1a926f(0x1a8)](tlang()[_0x1a926f(0x193)]);if(!_0xc2d7ff[_0x1a926f(0x1a6)](':')[0x0])return _0x164f77[_0x1a926f(0x1a8)](_0x1a926f(0x19c)+prefix+_0x1a926f(0x1b1));let _0x19ff5b=await sck[_0x1a926f(0x1a2)]({'id':_0x164f77[_0x1a926f(0x1a1)]});return!_0x19ff5b?(await new sck({'id':_0x164f77['chat'],'unmute':_0xc2d7ff})[_0x1a926f(0x1a0)](),_0x164f77[_0x1a926f(0x1a8)](_0x1a926f(0x1a7))):(await await sck[_0x1a926f(0x19b)]({'id':_0x164f77['chat']},{'unmute':_0xc2d7ff}),_0x164f77[_0x1a926f(0x1a8)]('_Unmute\x20updated\x20for\x20'+_0xc2d7ff+'\x20successfully._'));}),cmd({'pattern':'dunmute','desc':_0x3d12bd(0x19a),'category':_0x3d12bd(0x194)},async(_0xe136a1,_0x10ca97,_0x126ba7,{isCreator:_0x51c952})=>{const _0x11f71e=_0x3d12bd;if(!_0x51c952)return _0x10ca97[_0x11f71e(0x1a8)](tlang()['owner']);if(!_0x10ca97[_0x11f71e(0x1a4)])return _0x10ca97[_0x11f71e(0x1a8)](tlang()[_0x11f71e(0x193)]);let _0x39990b=await sck[_0x11f71e(0x1a2)]({'id':_0x10ca97['chat']});return!_0x39990b?_0x10ca97[_0x11f71e(0x1a8)]('There\x27s\x20no\x20unmute\x20set\x20in\x20group.'):(await await sck['updateOne']({'id':_0x10ca97[_0x11f71e(0x1a1)]},{'unmute':_0x11f71e(0x1ac)}),_0x10ca97[_0x11f71e(0x1a8)]('Unmute\x20deleted\x20successfully.'));}),cmd({'pattern':_0x3d12bd(0x1ad),'desc':_0x3d12bd(0x196),'category':'moderation'},async(_0x495ecc,_0x4f26c1,_0x26163f,{isCreator:_0x1899ba})=>{const _0x27abf1=_0x3d12bd;if(!_0x1899ba)return _0x4f26c1[_0x27abf1(0x1a8)](tlang()[_0x27abf1(0x1a3)]);if(!_0x4f26c1['isGroup'])return _0x4f26c1[_0x27abf1(0x1a8)](tlang()[_0x27abf1(0x193)]);let _0x1c288a=await sck[_0x27abf1(0x1a2)]({'id':_0x4f26c1[_0x27abf1(0x1a1)]});return!_0x1c288a?_0x4f26c1[_0x27abf1(0x1a8)](_0x27abf1(0x198)):(await await sck[_0x27abf1(0x19b)]({'id':_0x4f26c1[_0x27abf1(0x1a1)]},{'mute':'false'}),_0x4f26c1[_0x27abf1(0x1a8)](_0x27abf1(0x195)));});