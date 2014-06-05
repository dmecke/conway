speed=[500,1000,2000,100];
presets=[[666,704,706,734,735,742,743,773,777,782,783,796,797,802,803,812,818,822,823,836,837,842,843,852,856,858,859,864,866,892,898,906,933,937,974,975],[780,820,860],[780,818,819,860,861,899],[777,782,815,816,818,819,820,821,823,824,857,862],[780,818,820,859,860],[779,782,818,858,862,898,899,900,901],[699,700,701,739,741,779,781,859,861,899,901,939,940,941],[780,781,819,820,860],[575,576,582,583,616,617,621,622,653,656,658,660,662,665,693,694,695,697,698,700,701,703,704,705,734,736,738,740,742,744,775,776,777,781,782,783,855,856,857,861,862,863,894,896,898,900,902,904,933,934,935,937,938,940,941,943,944,945,973,976,978,980,982,985,1016,1017,1021,1022,1055,1056,1062,1063]];
presetnames=[["Glider gun."],["Blinker."],["Clock."],["Pulsator."],["Glider."],["Spaceship."],["Bracket."],["F-pentomino."],["Pulsar."]];
menu=['<a href=\"javascript:step();\" class=\"button\" title=\"Start simulation\">Start<\/a><a href=\"javascript:setup();\" class=\"button\" title=\"Set up blank Game of Life\">Blank<\/a><a href=\"javascript:preset();\" class=\"button\" title=\"Load Game of Life presets\">Presets<\/a><a href=\"javascript:random();\" class=\"button\" title=\"Set up random Game of Life\">Random<\/a><a href=\"javascript:help();\" class=\"button\" title=\"Toggle help on/off\">Help<\/a><a href=\"javascript:about();\" class=\"button\" title=\"About the Game of Life\">About<\/a><a href=\"mailto:thomas.weibel@bluewin.ch\" class=\"button\" title=\"E-mail to the author\">Mail<\/a>','<a href=\"javascript:calc(0);\" class=\"button\" title=\"Stop Game of Life\">Stop<\/a><a href=\"javascript:faster();\" class=\"button\" title=\"Set evolution speed\">Faster<\/a><a href=\"javascript:slower();\" class=\"button\" title=\"Set evolution speed\">Slower<\/a>'];
hlp=['&nbsp;','The Game of Life is a simulation of life and death of cell colonies. It was invented by the mathematician John Conway in 1970. He tested many parameters, some of which caused the cells to die too fast and others which caused too many cells to be born. The Game of Life balances these tendencies, making it hard to tell whether a pattern will die out completely, form a stable population, or grow forever. Every living cell is represented by a dark square. A cell has a certain number of neighbors &#0150; if there are three of them, a new living cell appears. Living cells with two or three neighbors will survive; when there are more or less neighbors they will die.'];

function setup()
{
gen=0;
b="<td class=\"black\"><\/td>";
cell=new Array();
for (i=0;i<1600;i++)
{
cell[i]="<td class=\"white\" onclick=\"draw("+i+")\"><\/td>";
}
message="Click to place living cells.";
show();
}

function show()
{
var display="<table id=\"board\"><tr>"+cell[0]+cell[1]+cell[2]+cell[3]+cell[4]+cell[5]+cell[6]+cell[7]+cell[8]+cell[9]+cell[10]+cell[11]+cell[12]+cell[13]+cell[14]+cell[15]+cell[16]+cell[17]+cell[18]+cell[19]+cell[20]+cell[21]+cell[22]+cell[23]+cell[24]+cell[25]+cell[26]+cell[27]+cell[28]+cell[29]+cell[30]+cell[31]+cell[32]+cell[33]+cell[34]+cell[35]+cell[36]+cell[37]+cell[38]+cell[39]+"<\/tr><tr>"+cell[40]+cell[41]+cell[42]+cell[43]+cell[44]+cell[45]+cell[46]+cell[47]+cell[48]+cell[49]+cell[50]+cell[51]+cell[52]+cell[53]+cell[54]+cell[55]+cell[56]+cell[57]+cell[58]+cell[59]+cell[60]+cell[61]+cell[62]+cell[63]+cell[64]+cell[65]+cell[66]+cell[67]+cell[68]+cell[69]+cell[70]+cell[71]+cell[72]+cell[73]+cell[74]+cell[75]+cell[76]+cell[77]+cell[78]+cell[79]+"<\/tr><tr>"+cell[80]+cell[81]+cell[82]+cell[83]+cell[84]+cell[85]+cell[86]+cell[87]+cell[88]+cell[89]+cell[90]+cell[91]+cell[92]+cell[93]+cell[94]+cell[95]+cell[96]+cell[97]+cell[98]+cell[99]+cell[100]+cell[101]+cell[102]+cell[103]+cell[104]+cell[105]+cell[106]+cell[107]+cell[108]+cell[109]+cell[110]+cell[111]+cell[112]+cell[113]+cell[114]+cell[115]+cell[116]+cell[117]+cell[118]+cell[119]+"<\/tr><tr>"+cell[120]+cell[121]+cell[122]+cell[123]+cell[124]+cell[125]+cell[126]+cell[127]+cell[128]+cell[129]+cell[130]+cell[131]+cell[132]+cell[133]+cell[134]+cell[135]+cell[136]+cell[137]+cell[138]+cell[139]+cell[140]+cell[141]+cell[142]+cell[143]+cell[144]+cell[145]+cell[146]+cell[147]+cell[148]+cell[149]+cell[150]+cell[151]+cell[152]+cell[153]+cell[154]+cell[155]+cell[156]+cell[157]+cell[158]+cell[159]+"<\/tr><tr>"+cell[160]+cell[161]+cell[162]+cell[163]+cell[164]+cell[165]+cell[166]+cell[167]+cell[168]+cell[169]+cell[170]+cell[171]+cell[172]+cell[173]+cell[174]+cell[175]+cell[176]+cell[177]+cell[178]+cell[179]+cell[180]+cell[181]+cell[182]+cell[183]+cell[184]+cell[185]+cell[186]+cell[187]+cell[188]+cell[189]+cell[190]+cell[191]+cell[192]+cell[193]+cell[194]+cell[195]+cell[196]+cell[197]+cell[198]+cell[199]+"<\/tr><tr>"+cell[200]+cell[201]+cell[202]+cell[203]+cell[204]+cell[205]+cell[206]+cell[207]+cell[208]+cell[209]+cell[210]+cell[211]+cell[212]+cell[213]+cell[214]+cell[215]+cell[216]+cell[217]+cell[218]+cell[219]+cell[220]+cell[221]+cell[222]+cell[223]+cell[224]+cell[225]+cell[226]+cell[227]+cell[228]+cell[229]+cell[230]+cell[231]+cell[232]+cell[233]+cell[234]+cell[235]+cell[236]+cell[237]+cell[238]+cell[239]+"<\/tr><tr>"+cell[240]+cell[241]+cell[242]+cell[243]+cell[244]+cell[245]+cell[246]+cell[247]+cell[248]+cell[249]+cell[250]+cell[251]+cell[252]+cell[253]+cell[254]+cell[255]+cell[256]+cell[257]+cell[258]+cell[259]+cell[260]+cell[261]+cell[262]+cell[263]+cell[264]+cell[265]+cell[266]+cell[267]+cell[268]+cell[269]+cell[270]+cell[271]+cell[272]+cell[273]+cell[274]+cell[275]+cell[276]+cell[277]+cell[278]+cell[279]+"<\/tr><tr>"+cell[280]+cell[281]+cell[282]+cell[283]+cell[284]+cell[285]+cell[286]+cell[287]+cell[288]+cell[289]+cell[290]+cell[291]+cell[292]+cell[293]+cell[294]+cell[295]+cell[296]+cell[297]+cell[298]+cell[299]+cell[300]+cell[301]+cell[302]+cell[303]+cell[304]+cell[305]+cell[306]+cell[307]+cell[308]+cell[309]+cell[310]+cell[311]+cell[312]+cell[313]+cell[314]+cell[315]+cell[316]+cell[317]+cell[318]+cell[319]+"<\/tr><tr>"+cell[320]+cell[321]+cell[322]+cell[323]+cell[324]+cell[325]+cell[326]+cell[327]+cell[328]+cell[329]+cell[330]+cell[331]+cell[332]+cell[333]+cell[334]+cell[335]+cell[336]+cell[337]+cell[338]+cell[339]+cell[340]+cell[341]+cell[342]+cell[343]+cell[344]+cell[345]+cell[346]+cell[347]+cell[348]+cell[349]+cell[350]+cell[351]+cell[352]+cell[353]+cell[354]+cell[355]+cell[356]+cell[357]+cell[358]+cell[359]+"<\/tr><tr>"+cell[360]+cell[361]+cell[362]+cell[363]+cell[364]+cell[365]+cell[366]+cell[367]+cell[368]+cell[369]+cell[370]+cell[371]+cell[372]+cell[373]+cell[374]+cell[375]+cell[376]+cell[377]+cell[378]+cell[379]+cell[380]+cell[381]+cell[382]+cell[383]+cell[384]+cell[385]+cell[386]+cell[387]+cell[388]+cell[389]+cell[390]+cell[391]+cell[392]+cell[393]+cell[394]+cell[395]+cell[396]+cell[397]+cell[398]+cell[399]+"<\/tr><tr>"+cell[400]+cell[401]+cell[402]+cell[403]+cell[404]+cell[405]+cell[406]+cell[407]+cell[408]+cell[409]+cell[410]+cell[411]+cell[412]+cell[413]+cell[414]+cell[415]+cell[416]+cell[417]+cell[418]+cell[419]+cell[420]+cell[421]+cell[422]+cell[423]+cell[424]+cell[425]+cell[426]+cell[427]+cell[428]+cell[429]+cell[430]+cell[431]+cell[432]+cell[433]+cell[434]+cell[435]+cell[436]+cell[437]+cell[438]+cell[439]+"<\/tr><tr>"+cell[440]+cell[441]+cell[442]+cell[443]+cell[444]+cell[445]+cell[446]+cell[447]+cell[448]+cell[449]+cell[450]+cell[451]+cell[452]+cell[453]+cell[454]+cell[455]+cell[456]+cell[457]+cell[458]+cell[459]+cell[460]+cell[461]+cell[462]+cell[463]+cell[464]+cell[465]+cell[466]+cell[467]+cell[468]+cell[469]+cell[470]+cell[471]+cell[472]+cell[473]+cell[474]+cell[475]+cell[476]+cell[477]+cell[478]+cell[479]+"<\/tr><tr>"+cell[480]+cell[481]+cell[482]+cell[483]+cell[484]+cell[485]+cell[486]+cell[487]+cell[488]+cell[489]+cell[490]+cell[491]+cell[492]+cell[493]+cell[494]+cell[495]+cell[496]+cell[497]+cell[498]+cell[499]+cell[500]+cell[501]+cell[502]+cell[503]+cell[504]+cell[505]+cell[506]+cell[507]+cell[508]+cell[509]+cell[510]+cell[511]+cell[512]+cell[513]+cell[514]+cell[515]+cell[516]+cell[517]+cell[518]+cell[519]+"<\/tr><tr>"+cell[520]+cell[521]+cell[522]+cell[523]+cell[524]+cell[525]+cell[526]+cell[527]+cell[528]+cell[529]+cell[530]+cell[531]+cell[532]+cell[533]+cell[534]+cell[535]+cell[536]+cell[537]+cell[538]+cell[539]+cell[540]+cell[541]+cell[542]+cell[543]+cell[544]+cell[545]+cell[546]+cell[547]+cell[548]+cell[549]+cell[550]+cell[551]+cell[552]+cell[553]+cell[554]+cell[555]+cell[556]+cell[557]+cell[558]+cell[559]+"<\/tr><tr>"+cell[560]+cell[561]+cell[562]+cell[563]+cell[564]+cell[565]+cell[566]+cell[567]+cell[568]+cell[569]+cell[570]+cell[571]+cell[572]+cell[573]+cell[574]+cell[575]+cell[576]+cell[577]+cell[578]+cell[579]+cell[580]+cell[581]+cell[582]+cell[583]+cell[584]+cell[585]+cell[586]+cell[587]+cell[588]+cell[589]+cell[590]+cell[591]+cell[592]+cell[593]+cell[594]+cell[595]+cell[596]+cell[597]+cell[598]+cell[599]+"<\/tr><tr>"+cell[600]+cell[601]+cell[602]+cell[603]+cell[604]+cell[605]+cell[606]+cell[607]+cell[608]+cell[609]+cell[610]+cell[611]+cell[612]+cell[613]+cell[614]+cell[615]+cell[616]+cell[617]+cell[618]+cell[619]+cell[620]+cell[621]+cell[622]+cell[623]+cell[624]+cell[625]+cell[626]+cell[627]+cell[628]+cell[629]+cell[630]+cell[631]+cell[632]+cell[633]+cell[634]+cell[635]+cell[636]+cell[637]+cell[638]+cell[639]+"<\/tr><tr>"+cell[640]+cell[641]+cell[642]+cell[643]+cell[644]+cell[645]+cell[646]+cell[647]+cell[648]+cell[649]+cell[650]+cell[651]+cell[652]+cell[653]+cell[654]+cell[655]+cell[656]+cell[657]+cell[658]+cell[659]+cell[660]+cell[661]+cell[662]+cell[663]+cell[664]+cell[665]+cell[666]+cell[667]+cell[668]+cell[669]+cell[670]+cell[671]+cell[672]+cell[673]+cell[674]+cell[675]+cell[676]+cell[677]+cell[678]+cell[679]+"<\/tr><tr>"+cell[680]+cell[681]+cell[682]+cell[683]+cell[684]+cell[685]+cell[686]+cell[687]+cell[688]+cell[689]+cell[690]+cell[691]+cell[692]+cell[693]+cell[694]+cell[695]+cell[696]+cell[697]+cell[698]+cell[699]+cell[700]+cell[701]+cell[702]+cell[703]+cell[704]+cell[705]+cell[706]+cell[707]+cell[708]+cell[709]+cell[710]+cell[711]+cell[712]+cell[713]+cell[714]+cell[715]+cell[716]+cell[717]+cell[718]+cell[719]+"<\/tr><tr>"+cell[720]+cell[721]+cell[722]+cell[723]+cell[724]+cell[725]+cell[726]+cell[727]+cell[728]+cell[729]+cell[730]+cell[731]+cell[732]+cell[733]+cell[734]+cell[735]+cell[736]+cell[737]+cell[738]+cell[739]+cell[740]+cell[741]+cell[742]+cell[743]+cell[744]+cell[745]+cell[746]+cell[747]+cell[748]+cell[749]+cell[750]+cell[751]+cell[752]+cell[753]+cell[754]+cell[755]+cell[756]+cell[757]+cell[758]+cell[759]+"<\/tr><tr>"+cell[760]+cell[761]+cell[762]+cell[763]+cell[764]+cell[765]+cell[766]+cell[767]+cell[768]+cell[769]+cell[770]+cell[771]+cell[772]+cell[773]+cell[774]+cell[775]+cell[776]+cell[777]+cell[778]+cell[779]+cell[780]+cell[781]+cell[782]+cell[783]+cell[784]+cell[785]+cell[786]+cell[787]+cell[788]+cell[789]+cell[790]+cell[791]+cell[792]+cell[793]+cell[794]+cell[795]+cell[796]+cell[797]+cell[798]+cell[799]+"<\/tr><tr>"+cell[800]+cell[801]+cell[802]+cell[803]+cell[804]+cell[805]+cell[806]+cell[807]+cell[808]+cell[809]+cell[810]+cell[811]+cell[812]+cell[813]+cell[814]+cell[815]+cell[816]+cell[817]+cell[818]+cell[819]+cell[820]+cell[821]+cell[822]+cell[823]+cell[824]+cell[825]+cell[826]+cell[827]+cell[828]+cell[829]+cell[830]+cell[831]+cell[832]+cell[833]+cell[834]+cell[835]+cell[836]+cell[837]+cell[838]+cell[839]+"<\/tr><tr>"+cell[840]+cell[841]+cell[842]+cell[843]+cell[844]+cell[845]+cell[846]+cell[847]+cell[848]+cell[849]+cell[850]+cell[851]+cell[852]+cell[853]+cell[854]+cell[855]+cell[856]+cell[857]+cell[858]+cell[859]+cell[860]+cell[861]+cell[862]+cell[863]+cell[864]+cell[865]+cell[866]+cell[867]+cell[868]+cell[869]+cell[870]+cell[871]+cell[872]+cell[873]+cell[874]+cell[875]+cell[876]+cell[877]+cell[878]+cell[879]+"<\/tr><tr>"+cell[880]+cell[881]+cell[882]+cell[883]+cell[884]+cell[885]+cell[886]+cell[887]+cell[888]+cell[889]+cell[890]+cell[891]+cell[892]+cell[893]+cell[894]+cell[895]+cell[896]+cell[897]+cell[898]+cell[899]+cell[900]+cell[901]+cell[902]+cell[903]+cell[904]+cell[905]+cell[906]+cell[907]+cell[908]+cell[909]+cell[910]+cell[911]+cell[912]+cell[913]+cell[914]+cell[915]+cell[916]+cell[917]+cell[918]+cell[919]+"<\/tr><tr>"+cell[920]+cell[921]+cell[922]+cell[923]+cell[924]+cell[925]+cell[926]+cell[927]+cell[928]+cell[929]+cell[930]+cell[931]+cell[932]+cell[933]+cell[934]+cell[935]+cell[936]+cell[937]+cell[938]+cell[939]+cell[940]+cell[941]+cell[942]+cell[943]+cell[944]+cell[945]+cell[946]+cell[947]+cell[948]+cell[949]+cell[950]+cell[951]+cell[952]+cell[953]+cell[954]+cell[955]+cell[956]+cell[957]+cell[958]+cell[959]+"<\/tr><tr>"+cell[960]+cell[961]+cell[962]+cell[963]+cell[964]+cell[965]+cell[966]+cell[967]+cell[968]+cell[969]+cell[970]+cell[971]+cell[972]+cell[973]+cell[974]+cell[975]+cell[976]+cell[977]+cell[978]+cell[979]+cell[980]+cell[981]+cell[982]+cell[983]+cell[984]+cell[985]+cell[986]+cell[987]+cell[988]+cell[989]+cell[990]+cell[991]+cell[992]+cell[993]+cell[994]+cell[995]+cell[996]+cell[997]+cell[998]+cell[999]+"<\/tr><tr>"+cell[1000]+cell[1001]+cell[1002]+cell[1003]+cell[1004]+cell[1005]+cell[1006]+cell[1007]+cell[1008]+cell[1009]+cell[1010]+cell[1011]+cell[1012]+cell[1013]+cell[1014]+cell[1015]+cell[1016]+cell[1017]+cell[1018]+cell[1019]+cell[1020]+cell[1021]+cell[1022]+cell[1023]+cell[1024]+cell[1025]+cell[1026]+cell[1027]+cell[1028]+cell[1029]+cell[1030]+cell[1031]+cell[1032]+cell[1033]+cell[1034]+cell[1035]+cell[1036]+cell[1037]+cell[1038]+cell[1039]+"<\/tr><tr>"+cell[1040]+cell[1041]+cell[1042]+cell[1043]+cell[1044]+cell[1045]+cell[1046]+cell[1047]+cell[1048]+cell[1049]+cell[1050]+cell[1051]+cell[1052]+cell[1053]+cell[1054]+cell[1055]+cell[1056]+cell[1057]+cell[1058]+cell[1059]+cell[1060]+cell[1061]+cell[1062]+cell[1063]+cell[1064]+cell[1065]+cell[1066]+cell[1067]+cell[1068]+cell[1069]+cell[1070]+cell[1071]+cell[1072]+cell[1073]+cell[1074]+cell[1075]+cell[1076]+cell[1077]+cell[1078]+cell[1079]+"<\/tr><tr>"+cell[1080]+cell[1081]+cell[1082]+cell[1083]+cell[1084]+cell[1085]+cell[1086]+cell[1087]+cell[1088]+cell[1089]+cell[1090]+cell[1091]+cell[1092]+cell[1093]+cell[1094]+cell[1095]+cell[1096]+cell[1097]+cell[1098]+cell[1099]+cell[1100]+cell[1101]+cell[1102]+cell[1103]+cell[1104]+cell[1105]+cell[1106]+cell[1107]+cell[1108]+cell[1109]+cell[1110]+cell[1111]+cell[1112]+cell[1113]+cell[1114]+cell[1115]+cell[1116]+cell[1117]+cell[1118]+cell[1119]+"<\/tr><tr>"+cell[1120]+cell[1121]+cell[1122]+cell[1123]+cell[1124]+cell[1125]+cell[1126]+cell[1127]+cell[1128]+cell[1129]+cell[1130]+cell[1131]+cell[1132]+cell[1133]+cell[1134]+cell[1135]+cell[1136]+cell[1137]+cell[1138]+cell[1139]+cell[1140]+cell[1141]+cell[1142]+cell[1143]+cell[1144]+cell[1145]+cell[1146]+cell[1147]+cell[1148]+cell[1149]+cell[1150]+cell[1151]+cell[1152]+cell[1153]+cell[1154]+cell[1155]+cell[1156]+cell[1157]+cell[1158]+cell[1159]+"<\/tr><tr>"+cell[1160]+cell[1161]+cell[1162]+cell[1163]+cell[1164]+cell[1165]+cell[1166]+cell[1167]+cell[1168]+cell[1169]+cell[1170]+cell[1171]+cell[1172]+cell[1173]+cell[1174]+cell[1175]+cell[1176]+cell[1177]+cell[1178]+cell[1179]+cell[1180]+cell[1181]+cell[1182]+cell[1183]+cell[1184]+cell[1185]+cell[1186]+cell[1187]+cell[1188]+cell[1189]+cell[1190]+cell[1191]+cell[1192]+cell[1193]+cell[1194]+cell[1195]+cell[1196]+cell[1197]+cell[1198]+cell[1199]+"<\/tr><tr>"+cell[1200]+cell[1201]+cell[1202]+cell[1203]+cell[1204]+cell[1205]+cell[1206]+cell[1207]+cell[1208]+cell[1209]+cell[1210]+cell[1211]+cell[1212]+cell[1213]+cell[1214]+cell[1215]+cell[1216]+cell[1217]+cell[1218]+cell[1219]+cell[1220]+cell[1221]+cell[1222]+cell[1223]+cell[1224]+cell[1225]+cell[1226]+cell[1227]+cell[1228]+cell[1229]+cell[1230]+cell[1231]+cell[1232]+cell[1233]+cell[1234]+cell[1235]+cell[1236]+cell[1237]+cell[1238]+cell[1239]+"<\/tr><tr>"+cell[1240]+cell[1241]+cell[1242]+cell[1243]+cell[1244]+cell[1245]+cell[1246]+cell[1247]+cell[1248]+cell[1249]+cell[1250]+cell[1251]+cell[1252]+cell[1253]+cell[1254]+cell[1255]+cell[1256]+cell[1257]+cell[1258]+cell[1259]+cell[1260]+cell[1261]+cell[1262]+cell[1263]+cell[1264]+cell[1265]+cell[1266]+cell[1267]+cell[1268]+cell[1269]+cell[1270]+cell[1271]+cell[1272]+cell[1273]+cell[1274]+cell[1275]+cell[1276]+cell[1277]+cell[1278]+cell[1279]+"<\/tr><tr>"+cell[1280]+cell[1281]+cell[1282]+cell[1283]+cell[1284]+cell[1285]+cell[1286]+cell[1287]+cell[1288]+cell[1289]+cell[1290]+cell[1291]+cell[1292]+cell[1293]+cell[1294]+cell[1295]+cell[1296]+cell[1297]+cell[1298]+cell[1299]+cell[1300]+cell[1301]+cell[1302]+cell[1303]+cell[1304]+cell[1305]+cell[1306]+cell[1307]+cell[1308]+cell[1309]+cell[1310]+cell[1311]+cell[1312]+cell[1313]+cell[1314]+cell[1315]+cell[1316]+cell[1317]+cell[1318]+cell[1319]+"<\/tr><tr>"+cell[1320]+cell[1321]+cell[1322]+cell[1323]+cell[1324]+cell[1325]+cell[1326]+cell[1327]+cell[1328]+cell[1329]+cell[1330]+cell[1331]+cell[1332]+cell[1333]+cell[1334]+cell[1335]+cell[1336]+cell[1337]+cell[1338]+cell[1339]+cell[1340]+cell[1341]+cell[1342]+cell[1343]+cell[1344]+cell[1345]+cell[1346]+cell[1347]+cell[1348]+cell[1349]+cell[1350]+cell[1351]+cell[1352]+cell[1353]+cell[1354]+cell[1355]+cell[1356]+cell[1357]+cell[1358]+cell[1359]+"<\/tr><tr>"+cell[1360]+cell[1361]+cell[1362]+cell[1363]+cell[1364]+cell[1365]+cell[1366]+cell[1367]+cell[1368]+cell[1369]+cell[1370]+cell[1371]+cell[1372]+cell[1373]+cell[1374]+cell[1375]+cell[1376]+cell[1377]+cell[1378]+cell[1379]+cell[1380]+cell[1381]+cell[1382]+cell[1383]+cell[1384]+cell[1385]+cell[1386]+cell[1387]+cell[1388]+cell[1389]+cell[1390]+cell[1391]+cell[1392]+cell[1393]+cell[1394]+cell[1395]+cell[1396]+cell[1397]+cell[1398]+cell[1399]+"<\/tr><tr>"+cell[1400]+cell[1401]+cell[1402]+cell[1403]+cell[1404]+cell[1405]+cell[1406]+cell[1407]+cell[1408]+cell[1409]+cell[1410]+cell[1411]+cell[1412]+cell[1413]+cell[1414]+cell[1415]+cell[1416]+cell[1417]+cell[1418]+cell[1419]+cell[1420]+cell[1421]+cell[1422]+cell[1423]+cell[1424]+cell[1425]+cell[1426]+cell[1427]+cell[1428]+cell[1429]+cell[1430]+cell[1431]+cell[1432]+cell[1433]+cell[1434]+cell[1435]+cell[1436]+cell[1437]+cell[1438]+cell[1439]+"<\/tr><tr>"+cell[1440]+cell[1441]+cell[1442]+cell[1443]+cell[1444]+cell[1445]+cell[1446]+cell[1447]+cell[1448]+cell[1449]+cell[1450]+cell[1451]+cell[1452]+cell[1453]+cell[1454]+cell[1455]+cell[1456]+cell[1457]+cell[1458]+cell[1459]+cell[1460]+cell[1461]+cell[1462]+cell[1463]+cell[1464]+cell[1465]+cell[1466]+cell[1467]+cell[1468]+cell[1469]+cell[1470]+cell[1471]+cell[1472]+cell[1473]+cell[1474]+cell[1475]+cell[1476]+cell[1477]+cell[1478]+cell[1479]+"<\/tr><tr>"+cell[1480]+cell[1481]+cell[1482]+cell[1483]+cell[1484]+cell[1485]+cell[1486]+cell[1487]+cell[1488]+cell[1489]+cell[1490]+cell[1491]+cell[1492]+cell[1493]+cell[1494]+cell[1495]+cell[1496]+cell[1497]+cell[1498]+cell[1499]+cell[1500]+cell[1501]+cell[1502]+cell[1503]+cell[1504]+cell[1505]+cell[1506]+cell[1507]+cell[1508]+cell[1509]+cell[1510]+cell[1511]+cell[1512]+cell[1513]+cell[1514]+cell[1515]+cell[1516]+cell[1517]+cell[1518]+cell[1519]+"<\/tr><tr>"+cell[1520]+cell[1521]+cell[1522]+cell[1523]+cell[1524]+cell[1525]+cell[1526]+cell[1527]+cell[1528]+cell[1529]+cell[1530]+cell[1531]+cell[1532]+cell[1533]+cell[1534]+cell[1535]+cell[1536]+cell[1537]+cell[1538]+cell[1539]+cell[1540]+cell[1541]+cell[1542]+cell[1543]+cell[1544]+cell[1545]+cell[1546]+cell[1547]+cell[1548]+cell[1549]+cell[1550]+cell[1551]+cell[1552]+cell[1553]+cell[1554]+cell[1555]+cell[1556]+cell[1557]+cell[1558]+cell[1559]+"<\/tr><tr>"+cell[1560]+cell[1561]+cell[1562]+cell[1563]+cell[1564]+cell[1565]+cell[1566]+cell[1567]+cell[1568]+cell[1569]+cell[1570]+cell[1571]+cell[1572]+cell[1573]+cell[1574]+cell[1575]+cell[1576]+cell[1577]+cell[1578]+cell[1579]+cell[1580]+cell[1581]+cell[1582]+cell[1583]+cell[1584]+cell[1585]+cell[1586]+cell[1587]+cell[1588]+cell[1589]+cell[1590]+cell[1591]+cell[1592]+cell[1593]+cell[1594]+cell[1595]+cell[1596]+cell[1597]+cell[1598]+cell[1599]+"<\/tr><tr><td colspan=\"40\"><p><br>"+message+"<\/p><p id=\"menu\"><br>"+menu[0]+"<\/p><\/td><\/tr><\/table>";
document.getElementById('screen').innerHTML=display;
}

function draw(i)
{
cell[i]=b;
show();
}

function step()
{
menu.reverse();
halt=window.setInterval('calc(1)',speed[0]);
}

function calc(a)
{
gen++;
message="Generations: "+gen;
neighbor=[-41,-40,-39,-1,1,39,40,41];
numb=new Array();
if (a==0)
{
window.clearInterval(halt);
menu.reverse();
}
else
{
for (i=0;i<1600;i++)
{
num=0;
for (j=0;j<8;j++) if (cell[i+neighbor[j]]==b) num++;
numb.push(num);
}
for (i=0;i<1600;i++)
{
if (cell[i]!=b) if (numb[i]==3) cell[i]=b;
if (cell[i]==b) if (numb[i]<2||numb[i]>3) cell[i]="<td class=\"grey\" onclick=\"draw("+i+")\"><\/td>";
}
}
show();
}

function faster()
{
if (speed[0]!=100)
{
speed.unshift(speed[speed.length-1]);
speed.length--;
window.clearInterval(halt);
halt=window.setInterval('calc(1)',speed[0]);
}
}

function slower()
{
if (speed[0]!=2000)
{
speed.push(speed[0]);
speed.shift();
window.clearInterval(halt);
halt=window.setInterval('calc(1)',speed[0]);
}
}

function preset()
{
setup();
presets.push(presets[0]);
presetnames.push(presetnames[0]);
presets.shift();
presetnames.shift();
for (i=0;i<presets[0].length;i++) cell[presets[0][i]]=b;
message=presetnames[0];
show();
}

function random()
{
setup();
for (i=0;i<1600;i++)
{
if (Math.random()<.2) cell[i]=b;
}
message="Random population.";
show();
}

function help()
{
helptext.reverse();
show();
}

function help()
{
hlp.reverse();
message=hlp[0];
show();
}

function about()
{
message="Game of Life 1.4, copyright &copy; twb";
show();
}