import Jeremy from "./Jeremy";
import Scott from "./Scott";
import Ryan from "./Ryan";
import Adrian from "./Adrian";
import Andy from "./Andy";
import Mike from "./Mike";
import Nick from "./Nick";
import Craig from "./Craig";

function Center(){
    return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <Scott/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <Ryan/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <Craig/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <Mike/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <Andy/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <Jeremy/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <Adrian/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <Nick/>
                        </div>
                    </div>
                </div>


            </div>

    )
}

export default Center