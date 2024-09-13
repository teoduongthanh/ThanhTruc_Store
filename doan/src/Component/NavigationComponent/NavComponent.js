
import React from 'react';

const NavComponent = () => {
    const renderContent = (type, options)=>{
        switch(type){
            case 'text':
                return options.map((options) => {
                    return(
                        <li><a href="#">{options}</a></li>
                    );
                
                });
            break;
            case 'checkbox':
                return options.map((options,index) => {
                    return(
                        <li>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id={`customCheck${index + 1}`}/>
                                <label className="custom-control-label" for={`customCheck${index + 1}`}>{options}</label>
                            </div>
                        </li>     
                    );
                });
            break;
            default:
               return {};
        }
    }
  return (
    <>
        <div className="col-lg-3 col-12 col-custom">
                            <aside className="sidebar_widget widget-mt">
                                <div className="widget_inner">
                                    <div className="widget-list widget-mb-1">
                                        <h3 className="widget-title">Search</h3>
                                        <div className="search-box">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Search Our Store" aria-label="Search Our Store"/>
                                                <div className="input-group-append">
                                                    <button className="btn btn-outline-secondary" type="button">
                                                        <i className="fa fa-search"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-list widget-mb-1">
                                        <h3 className="widget-title">Categories</h3>
                                        <div className="sidebar-body">
                                            <ul className="sidebar-list">
                                                {renderContent('text',['Cây Bonsai','Cây Phong Thủy','Cây Để Bàn','Cây Thủy Sinh','Cây Leo','Cây Nội Thất','Cây Hoa Cảnh','Cây Thủy Sinh'])}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget-list widget-mb-2">
                                        <h3 className="widget-title">Color</h3>
                                        <div className="sidebar-body">
                                            <ul className="checkbox-container categories-list">
                                            {renderContent('checkbox',['Black','Red','Blue','Green','Pink','Yellow'])}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
    </>
  )
}

export default NavComponent
