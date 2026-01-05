console.log(`test_1`);
import { ce_renderer, ce_hydrator, ce_listen, ce_call } from "content-engine-lib";

//set..
(async() => {
//set vars..
let _html = ``;
let _css_server = ``;
let _css_client = ``;
//set..
let _editor_html = ``;
let _editor_css_client = ``;
let _data = {
    l:  [

      /*{
        "id": "3e1bc78c-104f-4f6f-aa87-ee295db8ad8b",
        "type": "table",
        "data": {
          sortBy: 'id',
          sortDirection: 'asc',
          columns: [
            { key: 'id', title: 'ID', type: 'number', sortable: true },
            { key: 'name', title: 'Name', type: 'text', sortable: true },
            { key: 'age', title: 'Age', type: 'number', sortable: true },
            { key: 'email', title: 'Email', type: 'text', sortable: false },
            { key: 'active', title: 'Active', type: 'boolean', sortable: true },
            { key: 'joinDate', title: 'Join Date', type: 'date', sortable: true }
          ],
          rows: [
            {
              id: '1',
              name: 'John Doe',
              age: 28,
              email: 'john.doe@example.com',
              active: true,
              joinDate: '2023-01-15'
            },
            {
              id: 2,
              name: 'Jane Smith',
              age: 32,
              email: 'jane.smith@example.com',
              active: false,
              joinDate: '2022-11-20'
            },
          ]
        }
      },*/
      {
        "id": "3e1bc78c-104f-4f6f-aa87-ee295db8ad8c",
        "type": "text",
        "data": {
          "data": "Hello world! ",
        },
      }

    ]
};

//set..
const _ce_renderer = await ce_renderer({
  lib:[
    /*{
      renderer_src:`table`,
      hydrator_src:`table`,
      name:`table`,
    }*/
    {
      renderer_src:`http://localhost:5173/src/renderer/index.ts`,
      hydrator_src:`http://localhost:5173/src/hydrator/index.ts`,
      editor_src:`http://localhost:5173/src/editor/index.ts`,
      name:`text`,
    }
  ],
  /*lazy_lib: {
    renderer_src: `http://localhost:5173/src/l/{*}/renderer/index.ts`,
    hydrator_src: `http://localhost:5173/src/l/{*}/hydrator/index.ts`,
  }*/
});
const _ce_hydrator = await ce_hydrator({
  lib:[
    /*{
      renderer_src:`table`,
      hydrator_src:`table`,
      name:`table`,
    }*/
    {
      renderer_src:`http://localhost:5173/src/renderer/index.ts`,
      hydrator_src:`http://localhost:5173/src/hydrator/index.ts`,
      editor_src:`http://localhost:5173/src/editor/index.ts`,
      name:`text`,
    }
  ],
  /*lazy_lib: {
    renderer_src: `http://localhost:5173/src/l/{*}/renderer/index.ts`,
    hydrator_src: `http://localhost:5173/src/l/{*}/hydrator/index.ts`,
  }*/
});





/*
//====Editor====//  [START]
//if (import.meta.client) {
  ce_listen("msg", async(_$)=>{
    //console.log(`ce_listen`, _$);
    if (_$.type==`change` && _$._$p.data.curr[`type`]==`editor`) {
      console.log(`--ce:editor [change] `); //console.log(_v._$p.data[`curr`]);

      //test..
      let _v = _$;
      _data.l = _v._$p.data[`curr`].data.l;
      console.log(_data.l);
      //set..
      await _run();
      
    }
  });
  const _ce_editor_rsp =  await _ce_editor.set({
    data:{
      l:[]
    }
  },);

  //set..
  _editor_html = _ce_editor_rsp.r;
  _editor_css_client = _ce_editor_rsp.style;

//}
//====Editor====//  [END]  
*/



//set..
((mE_a,_b) => {
//console.log(_html);
//console.log(_css_server);
//console.log(_css_client);

//set..
const mE_e = document.getElementById(_b) || (() => { let e = document.createElement("div"); e.id = _b; mE_a!.appendChild(e); return e; })();
//console.log(mE_s);

 
//set..
mE_e!.innerHTML = `
  <div >
    <div>==Editor==</div>
    <div > ${_editor_html} </div>
  </div>
`;


})(document.getElementById("app"),`app__e_d_i_t_o_r`);




//set..
const _run = async () => {

//set..
//if (import.meta.client) { // import.meta.server |  import.meta.client  //NOTE: For real world where, we need SSR in action we use "import.meta.server". 
const _ce_renderer_rsp =  await _ce_renderer.set({
  data:_data
});
//console.log(_ce_renderer_rsp.r);

//set..
_html = _ce_renderer_rsp.r;
_css_server = _ce_renderer_rsp.style;




//}
//if (import.meta.client) {
setTimeout(async() => {
const _ce_hydrator_rsp =  await _ce_hydrator.set({
  data:_data
});

//set..
console.log(_ce_hydrator_rsp);
//}  
}, 200);




//set..
((mE_a,mE_h,_a,_b,_c) => {
//console.log(_html);
//console.log(_css_server);
//console.log(_css_client);

//set..
const mE_s = document.getElementById(_a) || (() => { let e = document.createElement("style"); e.id = _a; mE_h.appendChild(e); return e; })();
//console.log(mE_s);
const mE_log = document.getElementById(_b) || (() => { let e = document.createElement("div"); e.id = _b; mE_a!.appendChild(e); return e; })();
//console.log(mE_log);
const mE_preview = document.getElementById(_c) || (() => { let e = document.createElement("div"); e.id = _c; mE_a!.appendChild(e); return e; })();


//set..
mE_s!.innerHTML = `
${_css_server}
${_css_client}
${_editor_css_client}
`;

/*//set..
mE_log.innerHTML = `
<div>
    <div>==Log==</div>
    <div>
      ${JSON.stringify(_data)}
    </div>
  </div>

`;*/

//set..
mE_preview!.innerHTML = `
  <div>
    <div>==Preview==</div>
    <div > ${_html} </div>
  </div>
`;



})(document.getElementById("app"),document.head,`app__s_t_y_l_e`,`app__l_o_g`,`app__p_r_e_v_i_e_w`);

};
await _run();



 

 


})();