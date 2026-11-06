(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer","this.Container_96D94F89_879E_EDD5_4198_5FAAF0D2F3D2","this.Container_BEC4F7BE_B0EC_691F_41C4_963982E99865"],"layout":"absolute","scripts":{"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setLocale":TDV.Tour.Script.setLocale,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"clone":TDV.Tour.Script.clone,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizStart":TDV.Tour.Script.quizStart,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"showPopupImage":TDV.Tour.Script.showPopupImage,"setValue":TDV.Tour.Script.setValue,"openLink":TDV.Tour.Script.openLink,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getKey":TDV.Tour.Script.getKey,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"playAudioList":TDV.Tour.Script.playAudioList,"getPixels":TDV.Tour.Script.getPixels,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"shareSocial":TDV.Tour.Script.shareSocial,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getMediaByName":TDV.Tour.Script.getMediaByName,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"initAnalytics":TDV.Tour.Script.initAnalytics,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"initQuiz":TDV.Tour.Script.initQuiz,"downloadFile":TDV.Tour.Script.downloadFile,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"quizFinish":TDV.Tour.Script.quizFinish,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"historyGoForward":TDV.Tour.Script.historyGoForward,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"textToSpeech":TDV.Tour.Script.textToSpeech,"init":TDV.Tour.Script.init,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getOverlays":TDV.Tour.Script.getOverlays,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"historyGoBack":TDV.Tour.Script.historyGoBack,"isPanorama":TDV.Tour.Script.isPanorama,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"disableVR":TDV.Tour.Script.disableVR,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"cloneBindings":TDV.Tour.Script.cloneBindings,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"startMeasurement":TDV.Tour.Script.startMeasurement,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"createTween":TDV.Tour.Script.createTween,"getMainViewer":TDV.Tour.Script.getMainViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getComponentByName":TDV.Tour.Script.getComponentByName,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"enableVR":TDV.Tour.Script.enableVR,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setMapLocation":TDV.Tour.Script.setMapLocation,"resumePlayers":TDV.Tour.Script.resumePlayers,"showWindow":TDV.Tour.Script.showWindow,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"unregisterKey":TDV.Tour.Script.unregisterKey,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"translate":TDV.Tour.Script.translate,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"mixObject":TDV.Tour.Script.mixObject,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"toggleVR":TDV.Tour.Script.toggleVR,"registerKey":TDV.Tour.Script.registerKey,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizShowScore":TDV.Tour.Script.quizShowScore,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"executeJS":TDV.Tour.Script.executeJS,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"existsKey":TDV.Tour.Script.existsKey,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia},"id":"rootPlayer","data":{"textToSpeechConfig":{"pitch":1,"rate":1,"volume":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnTooltip":false,"speechOnQuizQuestion":false},"locales":{"en":"locale/en.txt"},"defaultLocale":"en","history":{},"name":"Player740","displayTooltipInTouchScreens":true},"backgroundColor":["#FFFFFF"],"start":"this.init()","backgroundColorRatios":[0],"minHeight":0,"scrollBarColor":"#000000","minWidth":0,"gap":10,"propagateClick":false,"width":"100%","height":"100%","watermark":false,"hash": "2f01a66e8cb97c79aa4d39ce4c065ec12a05ce4dc8283e2291f995bdfd36de95", "definitions": [{"class":"ViewerArea","surfaceReticleColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"progressBorderRadius":2,"toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBorderSize":0,"progressBackgroundColor":["#000000"],"playbackBarHeadWidth":6,"progressBarBackgroundColor":["#3399FF"],"playbackBarRight":0,"toolTipFontFamily":"Arial","subtitlesBackgroundOpacity":0.2,"playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","subtitlesFontFamily":"Arial","subtitlesBackgroundColor":"#000000","progressLeft":"33%","subtitlesGap":0,"playbackBarHeadShadowOpacity":0.7,"data":{"name":"Main Viewer"},"subtitlesBorderColor":"#FFFFFF","progressBackgroundColorRatios":[0],"vrPointerSelectionColor":"#FF6600","vrPointerSelectionTime":2000,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBackgroundOpacity":1,"toolTipTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"playbackBarBorderColor":"#FFFFFF","toolTipPaddingTop":4,"playbackBarBorderRadius":0,"playbackBarLeft":0,"progressRight":"33%","subtitlesTop":0,"playbackBarHeadHeight":15,"toolTipShadowColor":"#333138","toolTipFontSize":"1.11vmin","playbackBarHeadShadowColor":"#000000","progressBarBackgroundColorDirection":"horizontal","progressOpacity":0.7,"surfaceReticleSelectionColor":"#FFFFFF","progressBarBorderColor":"#000000","playbackBarProgressBorderColor":"#000000","id":"MainViewer","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadBorderSize":0,"toolTipPaddingLeft":6,"vrPointerColor":"#FFFFFF","firstTransitionDuration":0,"progressBarBackgroundColorRatios":[0],"progressBottom":10,"progressHeight":2,"minHeight":50,"playbackBarHeadShadow":true,"toolTipBorderColor":"#767676","minWidth":100,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadBorderColor":"#000000","playbackBarBottom":5,"toolTipPaddingRight":6,"toolTipFontColor":"#606060","subtitlesTextShadowOpacity":1,"playbackBarHeadBorderRadius":0,"progressBorderSize":0,"progressBarBorderRadius":2,"subtitlesFontColor":"#FFFFFF","playbackBarBorderSize":0,"playbackBarBackgroundColor":["#FFFFFF"],"propagateClick":false,"width":"100%","progressBarBorderSize":0,"subtitlesBottom":50,"toolTipPaddingBottom":4,"height":"100%","playbackBarHeight":10,"subtitlesFontSize":"3vmin","subtitlesTextShadowColor":"#000000","progressBorderColor":"#000000","vrThumbstickRotationStep":20,"subtitlesTextShadowHorizontalLength":1},{"pressedBackgroundOpacity":0.7,"iconWidth":0,"rollOverBackgroundOpacity":0.7,"pressedBackgroundColor":["#000000"],"layout":"horizontal","paddingTop":0,"rollOverShadow":false,"fontColor":"#000000","id":"Button_846A386D_8BE6_DEB5_41D0_0D460F78A615","paddingBottom":0,"fontSize":"22px","pressedFontColor":"#FFFFFF","backgroundColor":["#FFFFFF"],"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_A0A04CFA_B0E4_FF27_41B9_E7E8EE3A0E58, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 3)","iconHeight":0,"backgroundOpacity":0.7,"label":trans('Button_846A386D_8BE6_DEB5_41D0_0D460F78A615.label'),"backgroundColorRatios":[0],"fontFamily":"Montserrat SemiBold","tabIndex":0,"verticalAlign":"middle","minHeight":1,"fontWeight":"bold","minWidth":1,"buttonGroup":"Heights ","mode":"toggle","rollOverFontColor":"#FFFFFF","pressedBackgroundColorRatios":[1],"rollOverBackgroundColorRatios":[0],"rollOverBackgroundColor":["#000000"],"propagateClick":false,"width":176.04,"data":{"name":"Revit Model  B"},"height":40.02,"pressedBackgroundColorDirection":"vertical","paddingLeft":0,"borderColor":"#000000","paddingRight":0,"class":"Button","horizontalAlign":"center"},{"vfov":180,"frames":[{"cube":{"levels":[{"height":3072,"url":"media/panorama_84E16479_8BE5_569C_41D1_405320D909B0_0/{face}/0/{row}_{column}.webp","tags":"ondemand","rowCount":3,"class":"TiledImageResourceLevel","width":18432,"colCount":18},{"height":2048,"url":"media/panorama_84E16479_8BE5_569C_41D1_405320D909B0_0/{face}/1/{row}_{column}.webp","tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel","width":12288,"colCount":12},{"height":1024,"url":"media/panorama_84E16479_8BE5_569C_41D1_405320D909B0_0/{face}/2/{row}_{column}.webp","tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel","width":6144,"colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_84E16479_8BE5_569C_41D1_405320D909B0_t.webp"}],"hfov":360,"id":"panorama_84E16479_8BE5_569C_41D1_405320D909B0","data":{"label":"Pimpalpada_Revit_A_without_WCS_360_8k"},"hfovMax":130,"hfovMin":"120%","label":trans('panorama_84E16479_8BE5_569C_41D1_405320D909B0.label'),"class":"Panorama","thumbnailUrl":"media/panorama_84E16479_8BE5_569C_41D1_405320D909B0_t.webp"},{"layout":"vertical","id":"Container_96D94F89_879E_EDD5_4198_5FAAF0D2F3D2","overflow":"scroll","backgroundOpacity":0,"data":{"name":"Container"},"scrollBarColor":"#000000","right":"0%","minHeight":20,"minWidth":20,"gap":10,"propagateClick":false,"top":"0%","width":"11.037%","height":"100%","scrollBarMargin":2,"children":["this.Container_97591068_879E_5353_41D9_FB44CDF7D81F"],"class":"Container"},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"id":"panorama_84E009DD_8BE5_5195_41C2_E9BF25024A46_camera","enterPointingToHorizon":true,"initialSequence":"this.sequence_84E39F37_8BE5_5294_41D0_D5E20925CB00","class":"PanoramaCamera"},{"layout":"vertical","paddingTop":6,"id":"Container_BE6C3DB5_B0EF_992D_41B0_17F09F3B9D2E","overflow":"scroll","backgroundOpacity":0,"data":{"name":"Container"},"scrollBarColor":"#000000","minHeight":20,"minWidth":20,"gap":10,"propagateClick":false,"width":"100%","height":"20.679%","scrollBarMargin":2,"children":["this.Image_A0A9942F_B0EC_EF3D_41DC_1A9EBAA13A21"],"paddingRight":10,"class":"Container","horizontalAlign":"center"},{"touchControlMode":"drag_rotation","aaEnabled":true,"displayPlaybackBar":true,"viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","keepModel3DLoadedWithoutLocation":true,"id":"MainViewerPanoramaPlayer","arrowKeysAction":"translate","class":"PanoramaPlayer"},{"vfov":180,"frames":[{"cube":{"levels":[{"height":4096,"url":"media/panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8_0/{face}/0/{row}_{column}.webp","tags":"ondemand","rowCount":4,"class":"TiledImageResourceLevel","width":24576,"colCount":24},{"height":2048,"url":"media/panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8_0/{face}/1/{row}_{column}.webp","tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel","width":12288,"colCount":12},{"height":1024,"url":"media/panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8_0/{face}/2/{row}_{column}.webp","tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel","width":6144,"colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8_t.webp"}],"hfov":360,"id":"panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8","data":{"label":"Original Pnao"},"hfovMax":130,"class":"Panorama","thumbnailUrl":"media/panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8_t.webp","label":trans('panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8.label')},{"initialPosition":{"pitch":-5.75,"class":"PanoramaCameraPosition","yaw":91.59},"id":"panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8_camera","enterPointingToHorizon":true,"initialSequence":"this.sequence_8D91DAC7_8762_575D_41DF_71EBAA9144B0","class":"PanoramaCamera"},{"layout":"vertical","id":"Container_BEC4F7BE_B0EC_691F_41C4_963982E99865","left":"0%","overflow":"scroll","backgroundOpacity":0,"data":{"name":"Container"},"minHeight":20,"scrollBarColor":"#000000","minWidth":20,"gap":10,"propagateClick":false,"top":"0%","width":"12.869%","height":"100%","scrollBarMargin":2,"children":["this.Container_BE6C3DB5_B0EF_992D_41B0_17F09F3B9D2E"],"class":"Container"},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"id":"panorama_99ABFF10_8BE6_B26C_41E0_7B23DFE6ABF3_camera","enterPointingToHorizon":true,"initialSequence":"this.sequence_84E35F37_8BE5_5294_41BA_BCE606858A0D","class":"PanoramaCamera"},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"id":"panorama_84E16479_8BE5_569C_41D1_405320D909B0_camera","enterPointingToHorizon":true,"initialSequence":"this.sequence_84E37F37_8BE5_5294_41DD_22645046AA7B","class":"PanoramaCamera"},{"vfov":180,"frames":[{"cube":{"levels":[{"height":3072,"url":"media/panorama_84E009DD_8BE5_5195_41C2_E9BF25024A46_0/{face}/0/{row}_{column}.webp","tags":"ondemand","rowCount":3,"class":"TiledImageResourceLevel","width":18432,"colCount":18},{"height":2048,"url":"media/panorama_84E009DD_8BE5_5195_41C2_E9BF25024A46_0/{face}/1/{row}_{column}.webp","tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel","width":12288,"colCount":12},{"height":1024,"url":"media/panorama_84E009DD_8BE5_5195_41C2_E9BF25024A46_0/{face}/2/{row}_{column}.webp","tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel","width":6144,"colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_84E009DD_8BE5_5195_41C2_E9BF25024A46_t.webp"}],"hfov":360,"id":"panorama_84E009DD_8BE5_5195_41C2_E9BF25024A46","data":{"label":"Pimpalpada_Revit_B_new_layout_360_8k"},"hfovMax":130,"hfovMin":"120%","label":trans('panorama_84E009DD_8BE5_5195_41C2_E9BF25024A46.label'),"class":"Panorama","thumbnailUrl":"media/panorama_84E009DD_8BE5_5195_41C2_E9BF25024A46_t.webp"},{"pressedBackgroundOpacity":0.7,"iconWidth":0,"rollOverBackgroundOpacity":0.7,"pressedBackgroundColor":["#000000"],"layout":"horizontal","paddingTop":0,"rollOverShadow":false,"fontColor":"#000000","id":"Button_881659D9_87A2_5575_41C4_6AA14722FD17","paddingBottom":0,"fontSize":"22px","pressedFontColor":"#FFFFFF","backgroundColor":["#FFFFFF"],"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_A0A13CFA_B0E4_FF27_41D0_89CD6EBD269F, 91.59023668639048, -5.755677368833196, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)","iconHeight":0,"backgroundOpacity":0.7,"label":trans('Button_881659D9_87A2_5575_41C4_6AA14722FD17.label'),"backgroundColorRatios":[0],"fontFamily":"Montserrat SemiBold","tabIndex":0,"verticalAlign":"middle","minHeight":1,"fontWeight":"bold","minWidth":1,"buttonGroup":"Heights ","mode":"toggle","rollOverFontColor":"#FFFFFF","pressedBackgroundColorRatios":[1],"rollOverBackgroundColorRatios":[0],"rollOverBackgroundColor":["#000000"],"propagateClick":false,"width":133.07,"data":{"name":"Original"},"height":40,"pressedBackgroundColorDirection":"vertical","paddingLeft":0,"borderColor":"#000000","paddingRight":0,"class":"Button","horizontalAlign":"center"},{"pressedBackgroundOpacity":0.7,"iconWidth":0,"rollOverBackgroundOpacity":0.7,"pressedBackgroundColor":["#000000"],"layout":"horizontal","paddingTop":0,"rollOverShadow":false,"fontColor":"#000000","id":"Button_96A45DE6_87A6_2D5F_41E0_D4A85F302467","paddingBottom":0,"fontSize":"22px","pressedFontColor":"#FFFFFF","backgroundColor":["#FFFFFF"],"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_A0A1DCFA_B0E4_FF27_41E5_02ABC9BDE76C, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)","iconHeight":0,"backgroundOpacity":0.7,"label":trans('Button_96A45DE6_87A6_2D5F_41E0_D4A85F302467.label'),"backgroundColorRatios":[0],"fontFamily":"Montserrat SemiBold","tabIndex":0,"verticalAlign":"middle","minHeight":1,"fontWeight":"bold","minWidth":1,"buttonGroup":"Heights ","mode":"toggle","rollOverFontColor":"#FFFFFF","pressedBackgroundColorRatios":[1],"rollOverBackgroundColorRatios":[0],"rollOverBackgroundColor":["#000000"],"propagateClick":false,"width":176,"data":{"name":"KML Overlay"},"height":40,"pressedBackgroundColorDirection":"vertical","paddingLeft":0,"borderColor":"#000000","paddingRight":0,"class":"Button","horizontalAlign":"center"},{"vfov":180,"frames":[{"cube":{"levels":[{"height":3072,"url":"media/panorama_99ABFF10_8BE6_B26C_41E0_7B23DFE6ABF3_0/{face}/0/{row}_{column}.webp","tags":"ondemand","rowCount":3,"class":"TiledImageResourceLevel","width":18432,"colCount":18},{"height":2048,"url":"media/panorama_99ABFF10_8BE6_B26C_41E0_7B23DFE6ABF3_0/{face}/1/{row}_{column}.webp","tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel","width":12288,"colCount":12},{"height":1024,"url":"media/panorama_99ABFF10_8BE6_B26C_41E0_7B23DFE6ABF3_0/{face}/2/{row}_{column}.webp","tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel","width":6144,"colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_99ABFF10_8BE6_B26C_41E0_7B23DFE6ABF3_t.webp"}],"hfov":360,"id":"panorama_99ABFF10_8BE6_B26C_41E0_7B23DFE6ABF3","data":{"label":"Pimpalpada_KML_overlay_v2_360_8k"},"hfovMax":130,"hfovMin":"120%","label":trans('panorama_99ABFF10_8BE6_B26C_41E0_7B23DFE6ABF3.label'),"class":"Panorama","thumbnailUrl":"media/panorama_99ABFF10_8BE6_B26C_41E0_7B23DFE6ABF3_t.webp"},{"id":"Image_A0A9942F_B0EC_EF3D_41DC_1A9EBAA13A21","backgroundOpacity":0,"data":{"name":"Image"},"verticalAlign":"middle","minHeight":1,"url":trans('Image_A0A9942F_B0EC_EF3D_41DC_1A9EBAA13A21.url'),"minWidth":1,"propagateClick":false,"width":"89.931%","height":"46.947%","scaleMode":"fit_inside","class":"Image","horizontalAlign":"center"},{"pressedBackgroundOpacity":0.7,"iconWidth":0,"rollOverBackgroundOpacity":0.7,"pressedBackgroundColor":["#000000"],"layout":"horizontal","paddingTop":0,"rollOverShadow":false,"fontColor":"#000000","id":"Button_96ED4CCF_87A6_536E_41A2_BA7C43FB9E0B","paddingBottom":0,"fontSize":"22px","pressedFontColor":"#FFFFFF","backgroundColor":["#FFFFFF"],"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_A0A19CFA_B0E4_FF27_41CA_339E8803DB6A, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 2)","iconHeight":0,"backgroundOpacity":0.7,"label":trans('Button_96ED4CCF_87A6_536E_41A2_BA7C43FB9E0B.label'),"backgroundColorRatios":[0],"fontFamily":"Montserrat SemiBold","tabIndex":0,"verticalAlign":"middle","minHeight":1,"fontWeight":"bold","minWidth":1,"buttonGroup":"Heights ","mode":"toggle","rollOverFontColor":"#FFFFFF","pressedBackgroundColorRatios":[1],"rollOverBackgroundColorRatios":[0],"rollOverBackgroundColor":["#000000"],"propagateClick":false,"width":176.04,"data":{"name":"Revit Model"},"height":40.02,"pressedBackgroundColorDirection":"vertical","paddingLeft":0,"borderColor":"#000000","paddingRight":0,"class":"Button","horizontalAlign":"center"},{"id":"mainPlayList","items":["this.PanoramaPlayListItem_A0A13CFA_B0E4_FF27_41D0_89CD6EBD269F","this.PanoramaPlayListItem_A0A1DCFA_B0E4_FF27_41E5_02ABC9BDE76C","this.PanoramaPlayListItem_A0A19CFA_B0E4_FF27_41CA_339E8803DB6A","this.PanoramaPlayListItem_A0A04CFA_B0E4_FF27_41B9_E7E8EE3A0E58"],"class":"PlayList"},{"layout":"vertical","id":"Container_97591068_879E_5353_41D9_FB44CDF7D81F","overflow":"scroll","backgroundOpacity":0,"data":{"name":"Container"},"scrollBarColor":"#000000","verticalAlign":"middle","minHeight":20,"minWidth":20,"gap":10,"propagateClick":false,"width":"100%","height":"21.626%","scrollBarMargin":2,"children":["this.Button_881659D9_87A2_5575_41C4_6AA14722FD17","this.Button_96A45DE6_87A6_2D5F_41E0_D4A85F302467","this.Button_96ED4CCF_87A6_536E_41A2_BA7C43FB9E0B","this.Button_846A386D_8BE6_DEB5_41D0_0D460F78A615"],"class":"Container"},{"movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in"},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out"}],"id":"sequence_84E39F37_8BE5_5294_41D0_D5E20925CB00","class":"PanoramaCameraSequence"},{"movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in"},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out"}],"id":"sequence_8D91DAC7_8762_575D_41DF_71EBAA9144B0","class":"PanoramaCameraSequence"},{"movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in"},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out"}],"id":"sequence_84E35F37_8BE5_5294_41BA_BCE606858A0D","class":"PanoramaCameraSequence"},{"movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in"},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out"}],"id":"sequence_84E37F37_8BE5_5294_41DD_22645046AA7B","class":"PanoramaCameraSequence"},{"camera":"this.panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8_camera","media":"this.panorama_8B5DBFC2_8762_2D57_41DC_2E0FA86FFEF8","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_A0A13CFA_B0E4_FF27_41D0_89CD6EBD269F","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_99ABFF10_8BE6_B26C_41E0_7B23DFE6ABF3_camera","media":"this.panorama_99ABFF10_8BE6_B26C_41E0_7B23DFE6ABF3","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_A0A1DCFA_B0E4_FF27_41E5_02ABC9BDE76C","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"camera":"this.panorama_84E16479_8BE5_569C_41D1_405320D909B0_camera","media":"this.panorama_84E16479_8BE5_569C_41D1_405320D909B0","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_A0A19CFA_B0E4_FF27_41CA_339E8803DB6A","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"camera":"this.panorama_84E009DD_8BE5_5195_41C2_E9BF25024A46_camera","media":"this.panorama_84E009DD_8BE5_5195_41C2_E9BF25024A46","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_A0A04CFA_B0E4_FF27_41B9_E7E8EE3A0E58","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)"}],"scrollBarMargin":2,"defaultMenu":["fullscreen","mute","rotation"],"class":"Player"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.36, Fri Nov 6 2026
//