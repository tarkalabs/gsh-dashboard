var raw_data = [
  {"date":"01/01/16","steam_total_ton":217.45,"feed_water_flow":227,"condensate_flow":107,"ro_water_to_boiler":188,"coal_consumption_boiler":42.63803922,"sf_ratio":5.10,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4660.619559},
  {"date":"02/01/16","steam_total_ton":211.37,"feed_water_flow":220,"condensate_flow":219,"ro_water_to_boiler":177,"coal_consumption_boiler":41.44470588,"sf_ratio":5.10,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4530.180337},
  {"date":"03/01/16","steam_total_ton":241.83,"feed_water_flow":256,"condensate_flow":137,"ro_water_to_boiler":201,"coal_consumption_boiler":47.41745098,"sf_ratio":5.10,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5183.040861},
  {"date":"04/01/16","steam_total_ton":242.33,"feed_water_flow":246,"condensate_flow":122,"ro_water_to_boiler":193,"coal_consumption_boiler":47.51470588,"sf_ratio":5.10,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5193.671465},
  {"date":"05/01/16","steam_total_ton":235.81,"feed_water_flow":257,"condensate_flow":119,"ro_water_to_boiler":200,"coal_consumption_boiler":46.23803922,"sf_ratio":5.10,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5054.123358},
  {"date":"06/01/16","steam_total_ton":231.02,"feed_water_flow":245,"condensate_flow":202,"ro_water_to_boiler":190,"coal_consumption_boiler":45.29823529,"sf_ratio":5.10,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4951.396577},
  {"date":"07/01/16","steam_total_ton":222.96,"feed_water_flow":214,"condensate_flow":162,"ro_water_to_boiler":181,"coal_consumption_boiler":43.71803922,"sf_ratio":5.10,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4778.670699},
  {"date":"08/01/16","steam_total_ton":226.32,"feed_water_flow":250,"condensate_flow":213,"ro_water_to_boiler":198,"coal_consumption_boiler":44.37568627,"sf_ratio":5.10,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4850.55587},
  {"date":"09/01/16","steam_total_ton":218.54,"feed_water_flow":223,"condensate_flow":226,"ro_water_to_boiler":177,"coal_consumption_boiler":42.85078431,"sf_ratio":5.10,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4683.874005},
  {"date":"10/01/16","steam_total_ton":219.98,"feed_water_flow":251,"condensate_flow":173,"ro_water_to_boiler":194,"coal_consumption_boiler":43.1327451,"sf_ratio":5.10,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4714.694183},
  {"date":"11/01/16","steam_total_ton":214.14,"feed_water_flow":218,"condensate_flow":132,"ro_water_to_boiler":190,"coal_consumption_boiler":41.9872549,"sf_ratio":5.10,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4589.484531},
  {"date":"12/01/16","steam_total_ton":120.78,"feed_water_flow":169,"condensate_flow":76,"ro_water_to_boiler":153,"coal_consumption_boiler":23.68294118,"sf_ratio":5.10,"boiler_hours":24,"thermic_heater_hours":20,"energy_consumption":2588.702035},
  {"date":"13/01/16","steam_total_ton":28.55,"feed_water_flow":47,"condensate_flow":66,"ro_water_to_boiler":40,"coal_consumption_boiler":5.597058824,"sf_ratio":null,"boiler_hours":7,"thermic_heater_hours":0,"energy_consumption":611.7955306},
  {"date":"14/01/16","steam_total_ton":0.00,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":null,"thermic_heater_hours":null,"energy_consumption":0},
  {"date":"15/01/16","steam_total_ton":0.00,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":null,"thermic_heater_hours":null,"energy_consumption":0},
  {"date":"16/01/16","steam_total_ton":0.00,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":null,"thermic_heater_hours":null,"energy_consumption":0},
  {"date":"17/01/16","steam_total_ton":0.00,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":null,"thermic_heater_hours":null,"energy_consumption":0},
  {"date":"18/01/16","steam_total_ton":0.00,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":null,"thermic_heater_hours":null,"energy_consumption":0},
  {"date":"19/01/16","steam_total_ton":0.00,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":null,"thermic_heater_hours":null,"energy_consumption":0},
  {"date":"20/01/16","steam_total_ton":0.00,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":null,"thermic_heater_hours":null,"energy_consumption":0},
  {"date":"21/01/16","steam_total_ton":0.00,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":null,"thermic_heater_hours":null,"energy_consumption":0},
  {"date":"22/01/16","steam_total_ton":0.00,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":null,"thermic_heater_hours":null,"energy_consumption":0},
  {"date":"23/01/16","steam_total_ton":0.00,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":null,"thermic_heater_hours":null,"energy_consumption":0},
  {"date":"24/01/16","steam_total_ton":0.00,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":null,"thermic_heater_hours":null,"energy_consumption":0},
  {"date":"25/01/16","steam_total_ton":134,"feed_water_flow":134,"condensate_flow":76,"ro_water_to_boiler":130,"coal_consumption_boiler":25.72903846,"sf_ratio":5.20,"boiler_hours":18,"thermic_heater_hours":15,"energy_consumption":2867.49819},
  {"date":"26/01/16","steam_total_ton":197,"feed_water_flow":204,"condensate_flow":98,"ro_water_to_boiler":195,"coal_consumption_boiler":37.95673077,"sf_ratio":5.20,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4230.273003},
  {"date":"27/01/16","steam_total_ton":240,"feed_water_flow":257,"condensate_flow":77,"ro_water_to_boiler":224,"coal_consumption_boiler":46.08692308,"sf_ratio":5.20,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5136.381941},
  {"date":"28/01/16","steam_total_ton":250,"feed_water_flow":279,"condensate_flow":110,"ro_water_to_boiler":239,"coal_consumption_boiler":48,"sf_ratio":5.20,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5366.204448},
  {"date":"29/01/16","steam_total_ton":250,"feed_water_flow":271,"condensate_flow":91,"ro_water_to_boiler":209,"coal_consumption_boiler":48,"sf_ratio":5.20,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5366.868861},
  {"date":"30/01/16","steam_total_ton":250,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":48,"sf_ratio":5.20,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5361.510694},
  {"date":"31/01/16","steam_total_ton":252,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":48,"sf_ratio":5.20,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5400.453853},
  {"date":"01/02/16","steam_total_ton":245.685,"feed_water_flow":289,"condensate_flow":119,"ro_water_to_boiler":215,"coal_consumption_boiler":47.24711538,"sf_ratio":5.2,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5202.978431},
  {"date":"02/02/16","steam_total_ton":249.93,"feed_water_flow":264,"condensate_flow":96,"ro_water_to_boiler":229,"coal_consumption_boiler":48.06346154,"sf_ratio":5.2,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5292.876648},
  {"date":"03/02/16","steam_total_ton":241.507,"feed_water_flow":270,"condensate_flow":81,"ro_water_to_boiler":225,"coal_consumption_boiler":46.44365385,"sf_ratio":5.2,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5114.499103},
  {"date":"04/02/16","steam_total_ton":231.021,"feed_water_flow":266,"condensate_flow":127,"ro_water_to_boiler":212,"coal_consumption_boiler":44.42711538,"sf_ratio":5.2,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4892.432506},
  {"date":"05/02/16","steam_total_ton":255.243,"feed_water_flow":290,"condensate_flow":95,"ro_water_to_boiler":218,"coal_consumption_boiler":49.08519231,"sf_ratio":5.2,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5405.392367},
  {"date":"06/02/16","steam_total_ton":250.699,"feed_water_flow":282,"condensate_flow":123,"ro_water_to_boiler":208,"coal_consumption_boiler":48.21134615,"sf_ratio":5.2,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5309.162097},
  {"date":"07/02/16","steam_total_ton":265.422,"feed_water_flow":294,"condensate_flow":108,"ro_water_to_boiler":227,"coal_consumption_boiler":51.04269231,"sf_ratio":5.2,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5620.957491},
  {"date":"08/02/16","steam_total_ton":267.5,"feed_water_flow":295,"condensate_flow":65,"ro_water_to_boiler":235,"coal_consumption_boiler":51.44230769,"sf_ratio":5.2,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5664.964204},
  {"date":"09/02/16","steam_total_ton":254.109,"feed_water_flow":292,"condensate_flow":86,"ro_water_to_boiler":225,"coal_consumption_boiler":48.86711538,"sf_ratio":5.2,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5381.377155},
  {"date":"10/02/16","steam_total_ton":258.474,"feed_water_flow":297,"condensate_flow":103,"ro_water_to_boiler":224,"coal_consumption_boiler":53.84875,"sf_ratio":4.8,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5473.816664},
  {"date":"11/02/16","steam_total_ton":251.253,"feed_water_flow":287,"condensate_flow":104,"ro_water_to_boiler":219,"coal_consumption_boiler":49.26529412,"sf_ratio":5.1,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5320.894397},
  {"date":"12/02/16","steam_total_ton":247.169,"feed_water_flow":283,"condensate_flow":122,"ro_water_to_boiler":214,"coal_consumption_boiler":51.49354167,"sf_ratio":4.8,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5234.405747},
  {"date":"13/02/16","steam_total_ton":245.536,"feed_water_flow":280,"condensate_flow":null,"ro_water_to_boiler":208,"coal_consumption_boiler":46.32754717,"sf_ratio":5.3,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5199.822993},
  {"date":"14/02/16","steam_total_ton":265.919,"feed_water_flow":296,"condensate_flow":61,"ro_water_to_boiler":217,"coal_consumption_boiler":50.17339623,"sf_ratio":5.3,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5631.482677},
  {"date":"15/02/16","steam_total_ton":245.846,"feed_water_flow":275,"condensate_flow":74,"ro_water_to_boiler":216,"coal_consumption_boiler":46.38603774,"sf_ratio":5.3,"boiler_hours":23.45,"thermic_heater_hours":24,"energy_consumption":5206.387999},
  {"date":"16/02/16","steam_total_ton":246.154,"feed_water_flow":278,"condensate_flow":80,"ro_water_to_boiler":209,"coal_consumption_boiler":46.44415094,"sf_ratio":5.3,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5212.910649},
  {"date":"17/02/16","steam_total_ton":254.015,"feed_water_flow":290,"condensate_flow":119,"ro_water_to_boiler":212,"coal_consumption_boiler":46.18454545,"sf_ratio":5.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5379.386476},
  {"date":"18/02/16","steam_total_ton":264.55,"feed_water_flow":307,"condensate_flow":120,"ro_water_to_boiler":225,"coal_consumption_boiler":48.1,"sf_ratio":5.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5602.490767},
  {"date":"19/02/16","steam_total_ton":258.344,"feed_water_flow":304,"condensate_flow":115,"ro_water_to_boiler":205,"coal_consumption_boiler":46.97163636,"sf_ratio":5.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5471.063597},
  {"date":"20/02/16","steam_total_ton":246.771,"feed_water_flow":293,"condensate_flow":95,"ro_water_to_boiler":212,"coal_consumption_boiler":45.69833333,"sf_ratio":5.4,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5225.977127},
  {"date":"21/02/16","steam_total_ton":259.534,"feed_water_flow":303,"condensate_flow":83,"ro_water_to_boiler":209,"coal_consumption_boiler":48.06185185,"sf_ratio":5.4,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5496.264746},
  {"date":"22/02/16","steam_total_ton":265.926,"feed_water_flow":309,"condensate_flow":78,"ro_water_to_boiler":224,"coal_consumption_boiler":48.35018182,"sf_ratio":5.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5631.630919},
  {"date":"23/02/16","steam_total_ton":255.6,"feed_water_flow":292,"condensate_flow":82,"ro_water_to_boiler":223,"coal_consumption_boiler":46.47272727,"sf_ratio":5.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5412.952712},
  {"date":"24/02/16","steam_total_ton":228.49,"feed_water_flow":275,"condensate_flow":112,"ro_water_to_boiler":206,"coal_consumption_boiler":46.63061224,"sf_ratio":4.9,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4838.832415},
  {"date":"25/02/16","steam_total_ton":218.757,"feed_water_flow":261,"condensate_flow":89,"ro_water_to_boiler":193,"coal_consumption_boiler":44.64428571,"sf_ratio":4.9,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4632.712427},
  {"date":"26/02/16","steam_total_ton":217.033,"feed_water_flow":259,"condensate_flow":69,"ro_water_to_boiler":173,"coal_consumption_boiler":44.29244898,"sf_ratio":4.9,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4596.202527},
  {"date":"27/02/16","steam_total_ton":194.057,"feed_water_flow":236,"condensate_flow":73,"ro_water_to_boiler":168,"coal_consumption_boiler":39.60346939,"sf_ratio":4.9,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4109.629751},
  {"date":"28/02/16","steam_total_ton":209.523,"feed_water_flow":248,"condensate_flow":77,"ro_water_to_boiler":178,"coal_consumption_boiler":38.09509091,"sf_ratio":5.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4437.159981},
  {"date":"29/02/16","steam_total_ton":247.449,"feed_water_flow":286,"condensate_flow":129,"ro_water_to_boiler":207,"coal_consumption_boiler":44.99072727,"sf_ratio":5.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":5240.335429},
  {"date":"01/03/16","steam_total_ton": 252 ,"feed_water_flow":291,"condensate_flow":84,"ro_water_to_boiler":231,"coal_consumption_boiler":45.90709091,"sf_ratio":5.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4658.959034},
  {"date":"02/03/16","steam_total_ton": 243 ,"feed_water_flow":283,"condensate_flow":87,"ro_water_to_boiler":210,"coal_consumption_boiler":44.25709091,"sf_ratio":5.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4491.505984},
  {"date":"03/03/16","steam_total_ton": 244 ,"feed_water_flow":283,"condensate_flow":185,"ro_water_to_boiler":201,"coal_consumption_boiler":44.282,"sf_ratio":5.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4494.033925},
  {"date":"04/03/16","steam_total_ton": 232 ,"feed_water_flow":273,"condensate_flow":80,"ro_water_to_boiler":196,"coal_consumption_boiler":42.23418182,"sf_ratio":5.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4286.207621},
  {"date":"05/03/16","steam_total_ton": 223 ,"feed_water_flow":262,"condensate_flow":100,"ro_water_to_boiler":194,"coal_consumption_boiler":40.63163636,"sf_ratio":5.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4123.570576},
  {"date":"06/03/16","steam_total_ton": 233 ,"feed_water_flow":271,"condensate_flow":58,"ro_water_to_boiler":198,"coal_consumption_boiler":42.43890909,"sf_ratio":5.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4306.984716},
  {"date":"07/03/16","steam_total_ton": 246 ,"feed_water_flow":281,"condensate_flow":65,"ro_water_to_boiler":201,"coal_consumption_boiler":44.64927273,"sf_ratio":5.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4531.307221},
  {"date":"08/03/16","steam_total_ton":234.369,"feed_water_flow":270,"condensate_flow":49,"ro_water_to_boiler":217,"coal_consumption_boiler":42.61254545,"sf_ratio":5.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4324.606497},
  {"date":"09/03/16","steam_total_ton":234.252,"feed_water_flow":273,"condensate_flow":56,"ro_water_to_boiler":222,"coal_consumption_boiler":44.19849057,"sf_ratio":5.3,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4322.447598},
  {"date":"10/03/16","steam_total_ton":237.067,"feed_water_flow":273,"condensate_flow":113,"ro_water_to_boiler":223,"coal_consumption_boiler":43.9012963,"sf_ratio":5.4,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4374.390335},
  {"date":"11/03/16","steam_total_ton":224.834,"feed_water_flow":291,"condensate_flow":100,"ro_water_to_boiler":190,"coal_consumption_boiler":41.63592593,"sf_ratio":5.4,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4148.665468},
  {"date":"12/03/16","steam_total_ton":234.705,"feed_water_flow":288,"condensate_flow":85,"ro_water_to_boiler":203,"coal_consumption_boiler":43.46388889,"sf_ratio":5.4,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4330.806412},
  {"date":"13/03/16","steam_total_ton":239.134,"feed_water_flow":291,"condensate_flow":79,"ro_water_to_boiler":201,"coal_consumption_boiler":44.28407407,"sf_ratio":5.4,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4412.530881},
  {"date":"14/03/16","steam_total_ton":238.214,"feed_water_flow":288,"condensate_flow":90,"ro_water_to_boiler":212,"coal_consumption_boiler":44.1137037,"sf_ratio":5.4,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4395.554924},
  {"date":"15/03/16","steam_total_ton":229.993,"feed_water_flow":280,"condensate_flow":86,"ro_water_to_boiler":199,"coal_consumption_boiler":43.39490566,"sf_ratio":5.3,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4243.85999},
  {"date":"16/03/16","steam_total_ton":237.404,"feed_water_flow":205,"condensate_flow":69,"ro_water_to_boiler":187,"coal_consumption_boiler":49.45916667,"sf_ratio":4.8,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4380.608702},
  {"date":"17/03/16","steam_total_ton":252.188,"feed_water_flow":296,"condensate_flow":60,"ro_water_to_boiler":214,"coal_consumption_boiler":52.53916667,"sf_ratio":4.8,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4653.404944},
  {"date":"18/03/16","steam_total_ton":256.904,"feed_water_flow":307,"condensate_flow":60,"ro_water_to_boiler":219,"coal_consumption_boiler":53.52166667,"sf_ratio":4.8,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4740.425174},
  {"date":"19/03/16","steam_total_ton":240.494,"feed_water_flow":278,"condensate_flow":58,"ro_water_to_boiler":201,"coal_consumption_boiler":50.10291667,"sf_ratio":4.8,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4437.625773},
  {"date":"20/03/16","steam_total_ton":229.179,"feed_water_flow":293,"condensate_flow":81,"ro_water_to_boiler":193,"coal_consumption_boiler":47.745625,"sf_ratio":4.8,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4228.839959},
  {"date":"21/03/16","steam_total_ton":235.534,"feed_water_flow":288,"condensate_flow":65,"ro_water_to_boiler":205,"coal_consumption_boiler":44.44037736,"sf_ratio":5.3,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4346.103225},
  {"date":"22/03/16","steam_total_ton":238.672,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4404.005998},
  {"date":"23/03/16","steam_total_ton":232.6,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":4291.964685},
  {"date":"24/03/16","steam_total_ton":216.479,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":3994.497949},
  {"date":"25/03/16","steam_total_ton":213.189,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":3933.790452},
  {"date":"26/03/16","steam_total_ton":191.717,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":3537.586386},
  {"date":"27/03/16","steam_total_ton":null,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":0},
  {"date":"28/03/16","steam_total_ton":0,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":0},
  {"date":"29/03/16","steam_total_ton":0,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":0},
  {"date":"30/03/16","steam_total_ton":0,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":0},
  {"date":"31/03/16","steam_total_ton":51.144,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":943.7155711},
  {"date":"01/04/16","steam_total_ton": 229 ,"feed_water_flow":270,"condensate_flow":62,"ro_water_to_boiler":203,"coal_consumption_boiler":41.582,"sf_ratio":5.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 4,430.58 "},
  {"date":"02/04/16","steam_total_ton": 243 ,"feed_water_flow":286,"condensate_flow":68,"ro_water_to_boiler":201,"coal_consumption_boiler":44.22018182,"sf_ratio":5.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 4,711.68 "},
  {"date":"03/04/16","steam_total_ton": 243 ,"feed_water_flow":298,"condensate_flow":65,"ro_water_to_boiler":207,"coal_consumption_boiler":44.24745455,"sf_ratio":5.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 4,714.59 "},
  {"date":"04/04/16","steam_total_ton": 259 ,"feed_water_flow":320,"condensate_flow":70,"ro_water_to_boiler":225,"coal_consumption_boiler":47.11454545,"sf_ratio":5.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 5,020.08 "},
  {"date":"05/04/16","steam_total_ton": 249 ,"feed_water_flow":298,"condensate_flow":59,"ro_water_to_boiler":222,"coal_consumption_boiler":45.26072727,"sf_ratio":5.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 4,822.55 "},
  {"date":"06/04/16","steam_total_ton": 240 ,"feed_water_flow":283,"condensate_flow":63,"ro_water_to_boiler":196,"coal_consumption_boiler":49.95833333,"sf_ratio":4.8,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 4,645.60 "},
  {"date":"07/04/16","steam_total_ton": 254 ,"feed_water_flow":305,"condensate_flow":63,"ro_water_to_boiler":230,"coal_consumption_boiler":46.10818182,"sf_ratio":5.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 4,912.85 "},
  {"date":"08/04/16","steam_total_ton":255.419,"feed_water_flow":293,"condensate_flow":60,"ro_water_to_boiler":234,"coal_consumption_boiler":46.43981818,"sf_ratio":5.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 4,948.18 "},
  {"date":"09/04/16","steam_total_ton":245.444,"feed_water_flow":268,"condensate_flow":63,"ro_water_to_boiler":205,"coal_consumption_boiler":46.31018868,"sf_ratio":5.3,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 4,754.94 "},
  {"date":"10/04/16","steam_total_ton":240.442,"feed_water_flow":294,"condensate_flow":54,"ro_water_to_boiler":219,"coal_consumption_boiler":50.09208333,"sf_ratio":4.8,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 4,658.04 "},
  {"date":"11/04/16","steam_total_ton":247.057,"feed_water_flow":278,"condensate_flow":65,"ro_water_to_boiler":214,"coal_consumption_boiler":45.7512963,"sf_ratio":5.4,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 4,786.19 "},
  {"date":"12/04/16","steam_total_ton":245.541,"feed_water_flow":271,"condensate_flow":70,"ro_water_to_boiler":222,"coal_consumption_boiler":51.154375,"sf_ratio":4.8,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 4,756.82 "},
  {"date":"13/04/16","steam_total_ton":249.979,"feed_water_flow":271,"condensate_flow":69,"ro_water_to_boiler":214,"coal_consumption_boiler":55.55088889,"sf_ratio":4.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 4,842.80 "},
  {"date":"14/04/16","steam_total_ton":228.798,"feed_water_flow":257,"condensate_flow":52,"ro_water_to_boiler":213,"coal_consumption_boiler":50.844,"sf_ratio":4.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 4,432.46 "},
  {"date":"15/04/16","steam_total_ton":271.686,"feed_water_flow":305,"condensate_flow":61,"ro_water_to_boiler":241,"coal_consumption_boiler":59.06217391,"sf_ratio":4.6,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 5,263.32 "},
  {"date":"16/04/16","steam_total_ton":274.059,"feed_water_flow":304,"condensate_flow":61,"ro_water_to_boiler":271,"coal_consumption_boiler":60.902,"sf_ratio":4.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 5,309.29 "},
  {"date":"17/04/16","steam_total_ton":260.671,"feed_water_flow":301,"condensate_flow":68,"ro_water_to_boiler":251,"coal_consumption_boiler":47.39472727,"sf_ratio":5.5,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 5,049.93 "},
  {"date":"18/04/16","steam_total_ton":265.226,"feed_water_flow":315,"condensate_flow":70,"ro_water_to_boiler":161,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 5,138.17 "},
  {"date":"19/04/16","steam_total_ton":260.833,"feed_water_flow":297,"condensate_flow":80,"ro_water_to_boiler":251,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 5,053.07 "},
  {"date":"20/04/16","steam_total_ton":268.761,"feed_water_flow":304,"condensate_flow":66,"ro_water_to_boiler":244,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 5,206.66 "},
  {"date":"21/04/16","steam_total_ton":264.546,"feed_water_flow":302,"condensate_flow":65,"ro_water_to_boiler":158,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 5,125.00 "},
  {"date":"22/04/16","steam_total_ton":260.041,"feed_water_flow":295,"condensate_flow":66,"ro_water_to_boiler":244,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 5,037.73 "},
  {"date":"23/04/16","steam_total_ton":240.879,"feed_water_flow":268,"condensate_flow":72,"ro_water_to_boiler":231,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 4,666.50 "},
  {"date":"24/04/16","steam_total_ton":236.034,"feed_water_flow":261,"condensate_flow":79,"ro_water_to_boiler":237,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 4,572.64 "},
  {"date":"25/04/16","steam_total_ton":241.684,"feed_water_flow":270,"condensate_flow":94,"ro_water_to_boiler":230,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 4,682.10 "},
  {"date":"26/04/16","steam_total_ton":245.097,"feed_water_flow":268,"condensate_flow":61,"ro_water_to_boiler":220,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":24,"thermic_heater_hours":24,"energy_consumption":" 4,748.22 "},
  {"date":"27/04/16","steam_total_ton":-84376.312,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":null,"thermic_heater_hours":null,"energy_consumption":" -16,34,606.61 "},
  {"date":"28/04/16","steam_total_ton":0,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":null,"thermic_heater_hours":null,"energy_consumption":""},
  {"date":"29/04/16","steam_total_ton":0,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":null,"thermic_heater_hours":null,"energy_consumption":""},
  {"date":"30/04/16","steam_total_ton":0,"feed_water_flow":null,"condensate_flow":null,"ro_water_to_boiler":null,"coal_consumption_boiler":null,"sf_ratio":null,"boiler_hours":null,"thermic_heater_hours":null,"energy_consumption":""}
]
function makeNumber(fieldName, data) {
  return _.map(data, function(e) {
    var obj = {}
    obj[fieldName] = e[fieldName] === null || e[fieldName] === "" ? 0 : parseFloat(e[fieldName]);
    return _.extend(_.clone(e),obj);
  });
}

function extractDates(data) {
  return _.map(data, function(e) {
    return _.extend(_.clone(e),{date: moment(e.date, "dd/MM/yyyy")});
  });
}

function bucketByMonth(data) {
  return _.groupBy(data, function(e) {
    return e.date.month();
  });
}

function statsFor(data, column) {
  var values = _.pluck(data, column);
  var min = _.min(values);
  var max = _.max(values);
  var sum = _.reduce(values, function(memo, num) { return memo + num; }, 0);
  var count = values.length;
  var avg = sum/count;
  return {max: max, min: min, avg: avg, sum: sum, count: count, avg: avg};
}
var transform = _.compose(
  _.partial(makeNumber, "energy_consumption"),
  _.partial(makeNumber, "feed_water_flow"),
  _.partial(makeNumber, "coal_consumption_boiler"),
  extractDates
);
window.data = transform(raw_data);
window.dataByMonth = bucketByMonth(window.data);
